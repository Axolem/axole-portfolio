import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { KonamiCode } from "@/components/KonamiCode";
import { Toaster } from "@/components/ui/sonner";
import { PostHogProvider } from "@/provider/posthog";
import { inter } from "./fonts";

const PERSON_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Axole Maranjana",
	url: "https://axole.dotenv.co.za",
	sameAs: [
		"https://linkedin.com/in/axolemaranjana",
		"https://github.com/Axolem",
		"https://x.com/axole_ma",
		"https://www.npmjs.com/~axolema",
	],
	jobTitle: "Software Engineer & Aspiring Architect",
	worksFor: {
		"@type": "Organization",
		name: "FirstRand Limited (FNB)",
	},
	address: {
		"@type": "PostalAddress",
		addressLocality: "Johannesburg",
		addressCountry: "ZA",
	},
	knowsAbout: [
		"Java",
		"Spring Boot",
		"TypeScript",
		"Next.js",
		"Software Architecture",
		"Fintech Engineering",
		"Core Banking Systems",
		"Microservices",
		"Dividend Investing",
	],
	image: "https://axole.dotenv.co.za/axole-maranjana.jpg",
};

const WEBSITE_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Axole Maranjana",
	alternateName: "Axole Maranjana | Software Engineer & Aspiring Architect",
	url: "https://axole.dotenv.co.za",
	author: {
		"@type": "Person",
		name: "Axole Maranjana",
	},
	potentialAction: {
		"@type": "SearchAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://axole.dotenv.co.za/blog?tag={search_term_string}",
		},
		"query-input": "required name=search_term_string",
	},
};

const NAVIGATION_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Axole Maranjana — Key Pages",
	itemListElement: [
		{
			"@type": "SiteLinksSearchBox",
			url: "https://axole.dotenv.co.za",
		},
		{
			"@type": "ListItem",
			position: 1,
			name: "Blog",
			description:
				"Technical writing on software architecture, Java, TypeScript, fintech engineering, and dividend investing.",
			url: "https://axole.dotenv.co.za/blog",
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Projects",
			description:
				"Featured projects including PipAlert (forex trading app), payment gateway libraries, and automation tools.",
			url: "https://axole.dotenv.co.za/#projects",
		},
		{
			"@type": "ListItem",
			position: 3,
			name: "Experience",
			description:
				"Professional experience at FirstRand (FNB), Kilig Software, and Nedbank Group.",
			url: "https://axole.dotenv.co.za/#experience",
		},
		{
			"@type": "ListItem",
			position: 4,
			name: "Download CV",
			description:
				"Download Axole Maranjana's full professional CV / résumé as a PDF.",
			url: "https://axole.dotenv.co.za/axole-maranjana-cv.pdf",
		},
		{
			"@type": "ListItem",
			position: 5,
			name: "Contact",
			description:
				"Get in touch with Axole Maranjana via LinkedIn, GitHub, or email.",
			url: "https://axole.dotenv.co.za/#contact",
		},
	],
};

const meta = {
	title: {
		default: "Axole Maranjana | Software Engineer & Aspiring Architect",
		template: "%s | Axole Maranjana",
	},
	description:
		"Core Banking Developer (Java) & Full-Stack Engineer (TypeScript/Next.js). Specializing in scalable systems, fintech architecture, high-availability infrastructure, and financial systems engineering in Johannesburg, South Africa. Writing on software engineering, investing, and quantitative finance.",
	metadataBase: new URL("https://axole.dotenv.co.za"),
	keywords: [
		"Software Architecture",
		"Java Developer",
		"Spring Boot",
		"TypeScript",
		"Next.js",
		"System Design",
		"Fintech Engineering",
		"Core Banking Systems",
		"Microservices",
		"Johannesburg Developer",
		"Dividend Investing",
		"JSE Dividend Stocks",
		"Business Development Companies",
		"South African Investing",
		"Passive Income South Africa",
		"Portfolio Construction",
		"Quantitative Finance",
		"BDC Stocks",
	],
	creator: "Axole Maranjana",
	publisher: "Axole Maranjana",
	applicationName: "Axole Maranjana Portfolio",
	category: "Technology",
};

export const metadata: Metadata = {
	...meta,
	alternates: {
		canonical: "/",
		languages: {
			"en-ZA": "/en-ZA",
		},
	},
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png" }],
		other: [
			{
				rel: "android-chrome-192x192",
				url: "/android-chrome-192x192.png",
			},
			{
				rel: "android-chrome-512x512",
				url: "/android-chrome-512x512.png",
			},
		],
	},
	openGraph: {
		...meta,
		type: "website",
		url: "/",
		siteName: "Axole Maranjana Portfolio",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Axole Maranjana - Software Architecture & Engineering Portfolio",
			},
		],
		locale: "en_ZA",
		countryName: "South Africa",
	},
	twitter: {
		...meta,
		card: "summary_large_image",
		creator: "@axole_ma",
		images: ["/twitter-og.png"],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	other: {
		"msapplication-TileColor": "#1E40AF", // Keep your branding color
		"theme-color": "#1E40AF",
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "black-translucent",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script
					id="person-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
				/>
				<Script
					id="website-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
				/>
				<Script
					id="navigation-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(NAVIGATION_SCHEMA),
					}}
				/>
			</head>
			<body className={`${inter.className} min-h-screen bg-background`}>
				<PostHogProvider>
					<KonamiCode />
					{children}
					<Footer />
					<FloatingNav />
					<Toaster position="top-center" />
				</PostHogProvider>
			</body>
		</html>
	);
}
