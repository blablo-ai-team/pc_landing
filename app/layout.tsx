import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  userScalable: true, // Ngăn zoom
}

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
  title: "BlaBlo - Turn Dead Time into English Fluency",
  description: "Turn your commute or dishwashing time into confident English practice with engaging, AI-personalized stories. Start free today!",
  // keywords: ["business platform", "innovation", "technology", "growth", "English speaking", "language learning app", "practice English", "AI tutor", "English fluency"],
  authors: [{ name: "Blablo Team" }],

  creator: "Blablo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.blablo.co",
    title: "BlaBlo - Turn Dead Time into English Fluency",
    description: "Transform your business with our innovative solutions. Built for scale, designed for growth.",
    siteName: "Blablo",
    images: [
      {
        url: "https://www.blablo.co/og.jpg",
        width: 1200,
        height: 630,
        alt: "BlaBlo - English-Speaking App for Busy Professionals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@blablo",
    creator: "@blablo",
    title: "BlaBlo - Turn Dead Time into English Fluency",
    description: "Turn your commute or dishwashing time into confident English practice with engaging, AI-personalized stories.",
    images: ["https://www.blablo.co/og.jpg"],
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
