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
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9ad23799-3f8d-437f-bb20-1c659195324a"
        ></script>
      </head>
      <body className={inter.className}>
        <nav>
          <Header />
        </nav>
        {children}
      </body>
    </html>
  );
}
