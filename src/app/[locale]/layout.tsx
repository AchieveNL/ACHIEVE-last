import { Poppins } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BodyWrapper from "@/components/BodyWrapper";
import NavBar from "@/components/header/NavBar";
import { LanguageProvider } from "@/components/contexts/LanguageContext";
import Footer from "@/components/home/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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

// Generate static params for all locales - using routing config
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params
  const { locale } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Get messages using next-intl's built-in function
  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.variable}>
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            <BodyWrapper>
              <NavBar />
              <main>{children}</main>
              <Footer />
            </BodyWrapper>
          </LanguageProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
