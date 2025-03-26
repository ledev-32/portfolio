import type { Metadata } from "next";
import "./globals.css";
import header from "@/components/header";


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
      </body>
    </html>
  );
}
