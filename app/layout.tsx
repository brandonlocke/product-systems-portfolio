import type { Metadata } from "next";
import "@fontsource-variable/instrument-sans/standard.css";
import "@fontsource-variable/newsreader/standard.css";
import "@fontsource-variable/newsreader/standard-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Locke — Growth & Lifecycle Product",
  description: "Lifecycle and growth product manager turning customer behavior and operational complexity into product strategy.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
