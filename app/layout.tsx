import type { Metadata } from "next";

import { Footer, Nav } from "@/app/components";
import { interFont } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Zimmerly",
  description: "Portfolio for Andrew Zimmerly",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={interFont.className}>
    <body className="overflow-x-hidden overflow-y-scroll">
      <div className="flex min-h-screen flex-col items-center text-zinc-800 antialiased">
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
