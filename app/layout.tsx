import type { Metadata } from "next";
import "@fontsource-variable/instrument-sans/standard.css";
import "@fontsource-variable/newsreader/standard.css";
import "@fontsource-variable/newsreader/standard-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandonlocke.co"),
  title: "Brandon Locke — Growth & Lifecycle Product",
  description: "Product strategy for the moments where customer behavior, operational complexity, and growth collide.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Brandon Locke — Growth & Lifecycle Product",
    description: "Product strategy for the moments where customer behavior, operational complexity, and growth collide.",
    url: "https://brandonlocke.co",
    siteName: "Brandon Locke",
    type: "website",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Brandon Locke — product strategy for problems that resist the obvious answer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Locke — Growth & Lifecycle Product",
    description: "Product strategy for the moments where customer behavior, operational complexity, and growth collide.",
    images: ["/social-preview.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
