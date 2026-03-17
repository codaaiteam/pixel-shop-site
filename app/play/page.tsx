import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play ShopSt4r — Pixel Shop Game",
  description:
    "Play ShopSt4r directly in your browser. Design pixel art clothes, run your boutique, and serve customers!",
};

export default function PlayPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        height: "calc(100vh - 100px)",
      }}
    >
      <h1
        className="pixel-font"
        style={{ fontSize: 14, color: "#f8d028", marginBottom: 16 }}
      >
        PLAY SHOPST4R
      </h1>
      <div
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 900,
          border: "4px solid #5a3a18",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          background: "#000",
        }}
      >
        <iframe
          src="/game/index.html"
          title="ShopSt4r — Pixel Shop Game"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
        />
      </div>
      <p style={{ marginTop: 12, color: "#a898b8", fontSize: 12 }}>
        Tip: Your progress saves automatically in your browser.
      </p>
    </div>
  );
}
