import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Raghav Verma | Software Engineer";
const description =
  "Raghav Verma is a New York-based software engineer at Salesforce building recommendation systems, ML evaluation platforms, and distributed infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL("https://raghavverma.dev"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Raghav Verma",
    images: [
      {
        url: "/raghav-verma-photo.jpg",
        alt: "Raghav Verma",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/raghav-verma-photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
