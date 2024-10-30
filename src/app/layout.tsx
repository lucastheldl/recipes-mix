import { Header } from "@/components/Header";
import type { Metadata } from "next";

import "../styles/global.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recipes Mix",
  description: "Share your kitchen creations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`flex flex-col min-h-screen antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
