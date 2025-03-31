import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html suppressHydrationWarning lang="en">
      <body>
        <Navbar />
        <div className="grow mx-auto w-[80dvw]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
