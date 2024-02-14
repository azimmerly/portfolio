import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import { Footer, Nav } from "@/app/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Andrew Zimmerly",
  description: "Portfolio for Andrew Zimmerly",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={`${inter.variable} ${nunito.variable}`}>
      <div className="flex min-h-screen flex-col items-center font-inter">
        <main className="flex w-full max-w-6xl flex-auto flex-col px-4">
          <Nav />
          {children}
        </main>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
