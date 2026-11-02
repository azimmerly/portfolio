import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { SITE_URL } from "@/consts";
import { interFont } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: "Andrew Zimmerly | Software Engineer",
  description: "Portfolio for Andrew Zimmerly",
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    type: "website",
    title: "Andrew Zimmerly | Software Engineer",
    siteName: "Andrew Zimmerly",
    description: "Portfolio for Andrew Zimmerly",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={interFont.className} suppressHydrationWarning>
    <body className="flex min-h-screen flex-col items-center bg-neutral-100 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
      <Providers>
        <main className="flex w-full max-w-6xl flex-auto flex-col px-3.5">
          {children}
        </main>
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
