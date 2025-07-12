// app/layout.tsx
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BodyWrapper from "@/components/BodyWrapper";
import NavBar from "@/components/header/NavBar";
import { LanguageProvider } from "@/components/contexts/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html className={poppins.variable}>
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <LanguageProvider>
          <BodyWrapper>
            <NavBar />
            <main>{children}</main>
            <footer>{/* Global footer */}</footer>
          </BodyWrapper>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
