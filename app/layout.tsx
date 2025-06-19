import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Blablo - Next Generation Platform",
  description: "Transform your business with our innovative solutions. Built for scale, designed for growth.",
  keywords: ["business platform", "innovation", "technology", "growth"],
  authors: [{ name: "Blablo Team" }],
  creator: "Blablo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.blablo.co",
    title: "Blablo - Next Generation Platform",
    description: "Transform your business with our innovative solutions. Built for scale, designed for growth.",
    siteName: "Blablo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blablo - Next Generation Platform",
    description: "Transform your business with our innovative solutions. Built for scale, designed for growth.",
    creator: "@blablo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolageGrotesque.variable} font-bricolage antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
