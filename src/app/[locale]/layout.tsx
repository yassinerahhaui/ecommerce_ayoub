import type { Metadata } from "next";
import { Poppins, Markazi_Text } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import { notFound } from "next/navigation";
import "./globals.css";
import LanguageDefault from "@/elements/LanguageDefault";

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
      <body
        className={`${
          locale === "fr" ? poppins.className : markazi.className
        } overflow-x-hidden w-full`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Navbar />
        <LanguageDefault />
        {children}
      </body>
    </html>
  );
}
