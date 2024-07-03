import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalVideo from "@/components/ModalVideo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ammar Forte",
  description: "Ammar Forte: A Large Scale Real Estate Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/ammmar.png?v=1719436690"
          sizes="any"
        />
      </head>
      <body className="light">
        <ModalVideo />
        <div className="w-full flex justify-center items-center">
          <Navbar />
        </div>
        {children}
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
