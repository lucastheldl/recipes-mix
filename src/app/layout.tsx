import { Header } from "@/components/Header";
import type { Metadata } from "next";

import "../styles/global.css";
import { Footer } from "@/components/Footer";
import { AuthContextProvider } from "@/context/AuthContext";

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
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
