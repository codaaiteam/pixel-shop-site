"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");

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
      <p style={{ marginBottom: 12 }}>
        &copy; {new Date().getFullYear()} ShopSt4r. All rights reserved.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        <a
          href="/"
          style={{
            color: isZh ? "#6898c8" : "#f8d028",
            fontWeight: isZh ? 400 : 700,
            fontSize: 13,
            textDecoration: "none",
          }}
        >
          English
        </a>
        <span style={{ color: "#362a50" }}>|</span>
        <a
          href="/zh"
          style={{
            color: isZh ? "#f8d028" : "#6898c8",
            fontWeight: isZh ? 700 : 400,
            fontSize: 13,
            textDecoration: "none",
          }}
        >
          中文
        </a>
        <span style={{ color: "#362a50" }}>|</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 16px", width: "100%", padding: "16px 12px", fontSize: "13px", lineHeight: 1.6, opacity: 0.55, boxSizing: "border-box" }}>
        <a href="https://7-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>7-0 Game</a>
        <a href="https://17-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>17-0 Game</a>
        <a href="https://23-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>23-0 Game</a>
        <a href="https://27-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>27-0 Game</a>
        <a href="https://38-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>38-0 Game</a>
        <a href="https://82-0-challenge.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>82-0 Challenge</a>
      </div>




      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 16px", width: "100%", padding: "8px 12px", fontSize: "13px", lineHeight: 1.6, opacity: 0.55, boxSizing: "border-box" }}>
        <a href="https://mecchachameleonpc.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Meccha Chameleon</a>
      </div>
    </footer>
  );
}
