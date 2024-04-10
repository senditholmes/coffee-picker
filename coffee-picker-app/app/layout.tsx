import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee Picker",
  description: "App for picking your next coffee date",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex flex-col ml-20 mr-20 h-svh content-center justify-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
