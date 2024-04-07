import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee Picker",
  description: "App for picking your next coffee date",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="container" className="flex justify-center content-center items-center w-100 h-screen">
          {children} 
        </div>
      </body>
    </html>
  );


}
