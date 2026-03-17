import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShopSt4r — Run Your Own Pixel Art Clothing Boutique",
  description:
    "Design pixel art clothes, decorate your shop, serve quirky customers, and grow your fashion empire. Play free in your browser!",
};

const features = [
  {
    icon: "👕",
    title: "Design Clothing",
    desc: "Create pixel art t-shirts, hoodies, and jackets with colors, graphics, and layered designs.",
  },
  {
    icon: "🏪",
    title: "Run Your Shop",
    desc: "Place furniture, arrange displays, and serve customers who come in looking for the perfect outfit.",
  },
  {
    icon: "🎨",
    title: "Decorate Everything",
    desc: "Design pots, sculptures, paintings, lamps, and more to make your boutique truly unique.",
  },
  {
    icon: "💰",
    title: "Grow Your Empire",
    desc: "Earn money, unlock upgrades, buy new patterns, and expand your clothing collection.",
  },
  {
    icon: "✉️",
    title: "Meet Characters",
    desc: "Receive mail from Alyssa, Hope, and other characters who react to your shop and designs.",
  },
  {
    icon: "⭐",
    title: "Unlock Abilities",
    desc: "Buy upgrades like Move Graphics and Design Decor to unlock powerful creative tools.",
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 0 60px",
        }}
      >
        <h1
          className="pixel-font"
          style={{
            fontSize: 28,
            color: "#f8d028",
            marginBottom: 20,
            lineHeight: 1.6,
          }}
        >
          SHOPST4R
        </h1>
        <p
          style={{
            fontSize: 20,
            color: "#e0d8e8",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Run your own pixel art clothing boutique. Design clothes, decorate
          your shop, serve customers, and build your fashion empire.
        </p>
        <a
          href="/play"
          className="pixel-font"
          style={{
            display: "inline-block",
            background: "linear-gradient(180deg, #58b848 0%, #389828 100%)",
            color: "#fff",
            padding: "16px 40px",
            fontSize: 14,
            border: "3px solid #2a7818",
            borderRadius: 4,
            boxShadow: "0 4px 12px rgba(72,200,72,0.3)",
          }}
        >
          PLAY NOW
        </a>
        <p style={{ marginTop: 16, color: "#a898b8", fontSize: 13 }}>
          Free &middot; No download &middot; Plays in your browser
        </p>
      </section>

      {/* Features */}
      <section style={{ padding: "40px 0 80px" }}>
        <h2
          className="pixel-font"
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#e868a8",
            marginBottom: 40,
          }}
        >
          FEATURES
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#2a1e3e",
                border: "2px solid #362a50",
                borderRadius: 8,
                padding: "24px 20px",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <h3
                className="pixel-font"
                style={{ fontSize: 10, color: "#f8d028", marginBottom: 10 }}
              >
                {f.title}
              </h3>
              <p style={{ color: "#c8b8d8", fontSize: 14, lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
