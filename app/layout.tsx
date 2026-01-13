import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const boundedRegular = localFont({
  src: "../public/fonts/Bounded-Regular.ttf",
  variable: "--bounded-regular",
  display: "swap"
});

const ManropeSemibold = localFont({
  src: "../public/fonts/Manrope-Semibold.woff2",
  variable: "--manrope-semibold",
  display: "swap"
});

const ManropeMedium = localFont({
  src: "../public/fonts/Manrope-Medium.woff2",
  variable: "--manrope-medium",
  display: "swap"
});

const ManropeRegular = localFont({
  src: "../public/fonts/Manrope-Regular.woff2",
  variable: "--manrope-regular",
  display: "swap"
});

const ManropeLight = localFont({
  src: "../public/fonts/Manrope-Light.woff2",
  variable: "--manrope-light",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Steam zapravka - быстрое пополнение баланса Steam 2025 через СБП и Криптовалюту (BTC, SOL, XRP, USDT). Моментально 1–5 минут и с низкой комиссией!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${boundedRegular.variable} ${ManropeSemibold.variable} ${ManropeMedium.variable} ${ManropeRegular.variable} ${ManropeLight.variable} !bg-[url('/images/background.png')] !bg-center !bg-no-repeat !bg-cover antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
