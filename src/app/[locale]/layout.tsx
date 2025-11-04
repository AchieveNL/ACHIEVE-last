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
import { CalendlyProvider } from "@/components/contexts/CalendlyContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    template: "%s | Achieve - Digital Agency",
    default: "Achieve - Digital Agency",
  },
  description: "Professional digital marketing and web development services",
  icons: {
    icon: "/favico.ico",
  },
  metadataBase: new URL("https://youragency.com"),
  openGraph: {
    title: "Achieve - Digital Agency",
    description: "Professional digital marketing and web development services",
    url: "https://achieve.com",
    siteName: "Achieve",
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
            <CalendlyProvider>
              <BodyWrapper>
                <NavBar />
                <main>{children}</main>
                <Footer />
              </BodyWrapper>
            </CalendlyProvider>
          </LanguageProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
