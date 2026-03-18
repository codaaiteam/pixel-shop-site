import type { Metadata } from "next";
import Script from "next/script";
import Nav from "./Nav";
import Footer from "./Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopSt4r — Pixel Shop Game",
  description:
    "Run your own pixel art clothing boutique! Design clothes, decorate your shop, serve customers, and grow your fashion empire.",
  keywords: [
    "pixel art game",
    "clothing shop game",
    "browser game",
    "fashion game",
    "stardew valley",
    "shop simulator",
  ],
  metadataBase: new URL("https://shopst4r.com"),
  openGraph: {
    title: "ShopSt4r — Pixel Shop Game",
    description:
      "Run your own pixel art clothing boutique! Design clothes, serve customers, and grow your fashion empire.",
    url: "https://shopst4r.com",
    siteName: "ShopSt4r",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopSt4r — Pixel Shop Game",
    description:
      "Run your own pixel art clothing boutique! Design clothes, serve customers, and grow your fashion empire.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-domain="shopst4r.com"
          src="https://app.pageview.app/js/script.js"
        />
      </head>
      <body>
        <Nav />
        <main style={{ minHeight: "calc(100vh - 140px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
