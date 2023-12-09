import type { Metadata } from "next";
import { Poppins, Markazi_Text } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import { notFound } from "next/navigation";
import "./globals.css";
import LanguageDefault from "@/elements/LanguageDefault";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const markazi = Markazi_Text({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const locales = ["fr", "ar"];

export const metadata: Metadata = {
  title: "YRShop",
  description: "YRShop store ecommerce website",
};

interface RootLayout1 {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayout1) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./icons/favicon-16x16.png"
        />
      </head>
      <body
        className={`${
          locale === "fr" ? poppins.className : markazi.className
        } overflow-x-hidden w-full`}
      >
        <Navbar />
        <LanguageDefault />
        {children}
      </body>
    </html>
  );
}
