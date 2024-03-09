import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contentify",
  description:
    "A Chrome extension that effortlessly automates Linkedin feed scrolling and scrapes posts based on your keywords.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Header />
        </nav>
        {children}
      </body>
    </html>
  );
}
