import type { Metadata } from "next";
import "./globals.css";
import header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
  title: "Portfolio - Rémi SALARD",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {header()}
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
