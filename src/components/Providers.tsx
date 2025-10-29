import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/Toaster";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider defaultTheme="system" enableSystem>
    <Analytics />
    <Toaster />
    {children}
  </ThemeProvider>
);
