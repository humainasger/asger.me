import React from "react";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Asger Teglgaard - B2B SaaS Marketing & Growth",
    template: `%s | Asger Teglgaard`,
  },
  description: "Freelance growth marketer med 10 års erfaring. AI til det kedelige, mennesker til det brillante. Book en gratis marketing therapy session.",
  keywords: ["B2B marketing", "SaaS growth", "freelance marketer", "growth marketing Denmark", "marketing strategist", "demand generation"],
  authors: [{ name: "Asger Johannes Teglgaard" }],
  creator: "Asger Johannes Teglgaard",
  openGraph: {
    title: "Asger Teglgaard - B2B SaaS Marketing & Growth",
    description: "Freelance growth marketer med 10 års erfaring. AI til det kedelige, mennesker til det brillante. Book en gratis marketing therapy session.",
    url: DATA.url,
    siteName: "Asger Teglgaard",
    locale: "da_DK",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Asger Teglgaard - B2B SaaS Marketing & Growth",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Asger Teglgaard - B2B SaaS Marketing & Growth",
    description: "Freelance growth marketer med 10 års erfaring. AI til det kedelige, mennesker til det brillante.",
    card: "summary_large_image",
    site: "@asgerteglgaard",
    creator: "@asgerteglgaard",
    images: ["/og-image.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  // Ensure that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }
  
  // Enable static rendering
  setRequestLocale(locale);
  
  const messages = await getMessages();
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          ibmPlexMono.variable,
          ibmPlexSans.variable
        )}
      >
        <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider messages={messages}>
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
