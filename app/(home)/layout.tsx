import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrew Zimmerly | Projects",
};

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const Layout = ({ children }: LayoutProps) => children;
export default Layout;
