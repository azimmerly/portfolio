import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider defaultTheme="system" enableSystem>
    <Analytics />
    {children}
  </ThemeProvider>
);
