"use client";

import { Loader, Mail } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const BlogNewsletter: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		try {
			const response = await fetch("/api/newsletter/subscribe", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				toast.success(response.text);
				form.reset();
				posthog.capture("newsletter_subscribe");
			} else {
				toast.error(response.text);
				console.error("Subscription failed");
				posthog.capture("newsletter_subscribe_error", { error: response.text });
			}
		} catch (error) {
			toast.error("Error submitting form:", {
				description: (error as Error).message,
			});
			posthog.capture("newsletter_subscribe_error", { error });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-secondary/20 my-12 p-6 border border-gray-800 rounded-xl">
			<div className="flex items-center gap-3 mb-4">
				<div className="bg-purple-500/20 p-3 rounded-full">
					<Mail size={24} className="text-purple-400" />
				</div>
				<h3 className="font-space-grotesk font-bold text-xl">
					Subscribe to my newsletter
				</h3>
			</div>

			<p className="mb-6 text-gray-400">
				Get notified when I publish new articles. No spam, just quality content.
			</p>

			<form onSubmit={handleSubmit} className="flex sm:flex-row flex-col gap-3">
				<Input
					type="email"
					name="email_address"
					placeholder="your@email.com"
					className="flex-1"
					required
				/>
				<Button type="submit" disabled={isLoading}>
					{isLoading ? <Loader className="animate-spin" /> : "Subscribe"}
				</Button>
			</form>

			<p className="mt-4 text-gray-400 text-sm text-center">
				We won&apos;t send you spam. Unsubscribe at any time. Powered by{" "}
				<Link
					href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"
					target="_blank"
					className="text-gray-400"
				>
					Kit
				</Link>
			</p>
		</div>
	);
};
