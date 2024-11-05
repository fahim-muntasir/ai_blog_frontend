import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kumbhSans = localFont({
  src: [
    { path: "./fonts/KumbhSans-ExtraLight.woff", weight: "200" },
    { path: "./fonts/KumbhSans-Light.woff", weight: "300" },
    { path: "./fonts/KumbhSans-Regular.woff", weight: "400" },
    { path: "./fonts/KumbhSans-Medium.woff", weight: "500" },
    { path: "./fonts/KumbhSans-SemiBold.woff", weight: "600" },
    { path: "./fonts/KumbhSans-Bold.woff", weight: "700" },
    { path: "./fonts/KumbhSans-ExtraBold.woff", weight: "800" },
    { path: "./fonts/KumbhSans-Black.woff", weight: "900" },
  ],
  variable: "--font-kumbh-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${kumbhSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
