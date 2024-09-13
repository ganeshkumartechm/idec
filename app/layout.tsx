import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import type { Metadata } from "next";
import FooterIdec from "@/components/footer-idec";
import HeaderIdec from "@/components/header-idec";
// import localFont from "next/font/local";

// const poppins = localFont({
//   src: "../public/fonts/DINRoundPro.woff2",
//   variable: "--font-poppins",
// });

export const metadata: Metadata = {
  title: "IDEC Home page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="bg-gray-50 text-gray-900">
          <Providers initialReduxState="">
            <HeaderIdec />
            <main className="mx-auto container">{children}</main>
            <FooterIdec />
          </Providers>
        </body>
      </html>
    </>
  );
}
