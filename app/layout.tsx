import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./ui/globals.css";

const hauora = localFont({
  src: [
    {
      path: "../public/assets/fonts/Hauora-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../public/assets/fonts/Hauora-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/assets/fonts/Hauora-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/Hauora-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/Hauora-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/Hauora-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/assets/fonts/Hauora-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-hauora",
});

export const metadata: Metadata = {
  title: "Flyps app",
  description: "We make successful high-tech projects",
  icons: {
    icon: "/assets/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${hauora.variable} font-hauora bg-white text-brand-body text-base leading-[21px] antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
