import type { Metadata } from "next";
import { socialPreviewImage } from "./social-preview";
import "@fontsource-variable/manrope";
import "./globals.css";
import "./product-demo.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandonlocke.co"),
  title: "Brandon Locke | Growth & Lifecycle Product Manager",
  description: "Consumer product management across growth, lifecycle, and marketplace experiences. Selected work in Rewards, service recovery, and booking.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Brandon Locke | Growth & Lifecycle Product Manager",
    description: "Making complex consumer experiences feel simple. Explore the decisions, contributions, and evidence behind selected product work.",
    url: "https://brandonlocke.co",
    siteName: "Brandon Locke",
    type: "website",
    images: [socialPreviewImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Locke | Growth & Lifecycle Product Manager",
    description: "Making complex consumer experiences feel simple. Explore selected work in Rewards, service recovery, and booking.",
    images: [socialPreviewImage.url],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
