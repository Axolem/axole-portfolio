import type { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
	// https://app.kit.com/forms/7987895/subscriptions

	const formData = await req.formData(); // Get the entire formData object
	const email_address = formData.get("email_address"); // Get the specific field

	// 1. Check if email_address is provided
	if (!email_address || typeof email_address !== "string") {
		return new Response(
			"Email address is required.",
			{ status: 400 }, // Use 400 Bad Request for invalid input
		);
	}

	// 2. Basic Email Format Validation using Regex
	// This is a pragmatic regex, suitable for most cases.
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (!emailRegex.test(email_address)) {
		return new Response("Invalid email address format.", { status: 400 });
	}
	// return new Response("Subscribed successfully");
	try {
		const kitResponse = await fetch(
			"https://app.kit.com/forms/798795/subscriptions",
			{
				method: "POST",
				body: formData,
			},
		);

		if (!kitResponse.ok) {
			// Handle errors from the Kit API
			console.error(
				"Error subscribing with Kit:",
				kitResponse.status,
				kitResponse.statusText,
			);
			const errorBody = await kitResponse.text(); // Or .json() if it returns JSON
			console.error("Kit error response:", errorBody);
			return new Response("Subscription failed. Please try again.", {
				status: kitResponse.status || 500,
			});
		}

		// Optionally process the successful response from Kit
		// const kitSuccessData = await kitResponse.json();

		return new Response("Subscribed successfully");
	} catch (error) {
		console.error("Error during subscription process:", error);
		return new Response("An unexpected error occurred.", { status: 500 });
	}
};
