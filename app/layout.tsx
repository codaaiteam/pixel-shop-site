import type { Metadata } from "next";
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

function Nav() {
  return (
    <nav
      style={{
        background: "#2a1e3e",
        borderBottom: "3px solid #5a3a18",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <a
        href="/"
        className="pixel-font"
        style={{ color: "#f8d028", fontSize: 14, letterSpacing: 2 }}
      >
        SHOPST4R
      </a>
      <div style={{ display: "flex", gap: 24 }}>
        <a href="/play" style={{ color: "#48c848", fontWeight: 600 }}>
          Play
        </a>
        <a href="/how-to-play" style={{ color: "#f0e8f8", fontWeight: 500 }}>
          How to Play
        </a>
        <a href="/characters" style={{ color: "#f0e8f8", fontWeight: 500 }}>
          Characters
        </a>
        <a href="/devlog" style={{ color: "#f0e8f8", fontWeight: 500 }}>
          Devlog
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "32px 16px",
        color: "#a898b8",
        fontSize: 12,
        borderTop: "1px solid #362a50",
      }}
    >
      <p className="pixel-font" style={{ fontSize: 8, marginBottom: 8 }}>
        SHOPST4R.COM
      </p>
      <p>&copy; {new Date().getFullYear()} ShopSt4r. All rights reserved.</p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ minHeight: "calc(100vh - 140px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
