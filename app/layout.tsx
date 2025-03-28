import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gregory Beckmann Tracy",
  description: "Violin maker and restorer in Pittsburgh, PA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
