import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";
import { KonamiCode } from "@/components/KonamiCode";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/FloatingNav";

const meta = {
  title: {
    default: "Axole Maranjana | Technopreneur & Full-Stack Developer",
    template: "%s | Axole Maranjana",
  },
  description:
    "Creator of PipAlert | Open Source Contributor | C# & React Native Specialist | Automating workflows from Johannesburg, South Africa",
  metadataBase: new URL("https://axole.dotenv.co.za"),
  keywords: [
    "Forex App Developer",
    "React Native Expert",
    "C# Automation",
    "South African Technopreneur",
    "Open Source Contributor",
    "Power Automate",
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
        alt: "Axole Maranjana - Developer Portfolio",
      },
    ],
    locale: "en_ZA",
    countryName: "South Africa",
  },
  twitter: {
    ...meta,
    card: "summary_large_image",
    creator: "@axole_mar",
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
    "msapplication-TileColor": "#1E40AF",
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
      <body className={`${inter.className} min-h-screen bg-background`}>
        <KonamiCode />
        {children}
        <Footer />
        <FloatingNav />
      </body>
    </html>
  );
}
