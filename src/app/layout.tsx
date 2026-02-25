import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import { interFont } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Zimmerly",
  description: "Portfolio for Andrew Zimmerly",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={interFont.className} suppressHydrationWarning>
    <body className="flex min-h-screen flex-col items-center text-mist-900 antialiased dark:bg-mist-950 dark:text-white">
      <Providers>
        <main className="flex w-full max-w-6xl flex-auto flex-col px-3.5">
          <Nav />
          {children}
        </main>
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
