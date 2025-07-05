// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BodyWrapper from "@/components/BodyWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "%s | Your Agency Name",
    default: "Your Agency Name - Professional Digital Services",
  },
  description: "Professional digital marketing and web development services",
  metadataBase: new URL("https://youragency.com"),
  openGraph: {
    title: "Your Agency Name",
    description: "Professional digital services",
    url: "https://youragency.com",
    siteName: "Your Agency Name",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <BodyWrapper>
          <header>{/* Global navigation */}</header>
          <main>{children}</main>
          <footer>{/* Global footer */}</footer>
        </BodyWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
