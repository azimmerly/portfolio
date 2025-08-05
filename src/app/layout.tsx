import type { Metadata } from "next";
import { Toaster } from "sonner";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { interFont } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Zimmerly",
  description: "Portfolio for Andrew Zimmerly",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={interFont.className}>
    <body className="flex min-h-screen flex-col items-center text-gray-800 antialiased">
      <main className="flex w-full max-w-6xl flex-auto flex-col px-4">
        <Nav />
        {children}
      </main>
      <Footer />
      <Toaster richColors position="bottom-left" />
    </body>
  </html>
);

export default RootLayout;
