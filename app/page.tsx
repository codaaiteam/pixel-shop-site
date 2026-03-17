import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ShopSt4r — Run Your Own Pixel Art Clothing Boutique",
  description:
    "Design pixel art clothes, decorate your shop, serve quirky customers, and grow your fashion empire. Play free in your browser!",
};

const faqs = [
  {
    q: "Is ShopSt4r free to play?",
    a: "Yes! ShopSt4r is completely free. Just open your browser and start playing — no download or sign-up required.",
  },
  {
    q: "What devices can I play ShopSt4r on?",
    a: "ShopSt4r runs in any modern web browser on desktop, laptop, tablet, or phone. No app install needed.",
  },
  {
    q: "How do I design clothes in ShopSt4r?",
    a: "Use the in-game design tool to pick colors, add graphics, and layer patterns onto t-shirts, hoodies, and jackets. Unlock more options as you progress.",
  },
  {
    q: "Is ShopSt4r similar to Stardew Valley?",
    a: "ShopSt4r shares the cozy pixel art style and simulation gameplay of Stardew Valley, but focuses on running a clothing boutique instead of a farm.",
  },
  {
    q: "Can I save my progress?",
    a: "Yes, your progress is automatically saved in your browser. You can pick up right where you left off.",
  },
  {
    q: "How do I earn money in the game?",
    a: "Sell clothes and decorations to customers who visit your shop. Better designs and higher star ratings earn more money.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const gameJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "ShopSt4r",
  description:
    "Run your own pixel art clothing boutique. Design clothes, decorate your shop, serve customers, and grow your fashion empire.",
  genre: ["Simulation", "Casual", "Pixel Art"],
  gamePlatform: "Web Browser",
  applicationCategory: "Game",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://shopst4r.com",
  playMode: "SinglePlayer",
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

const sectionTitle = {
  fontSize: 14,
  color: "#e868a8",
  marginBottom: 40,
  textAlign: "center" as const,
};

export default function Home() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="game-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />
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

      {/* What is ShopSt4r */}
      <section style={{ padding: "40px 0 60px" }}>
        <h2 className="pixel-font" style={sectionTitle}>
          WHAT IS SHOPST4R?
        </h2>
        <div
          style={{
            background: "#2a1e3e",
            border: "2px solid #362a50",
            borderRadius: 8,
            padding: "32px 28px",
            lineHeight: 1.8,
            color: "#c8b8d8",
            fontSize: 15,
          }}
        >
          <p style={{ marginBottom: 16 }}>
            <strong style={{ color: "#f8d028" }}>ShopSt4r</strong> is a free
            browser-based pixel art simulation game where you run your own
            clothing boutique. Inspired by cozy games like Stardew Valley and
            shop management sims, ShopSt4r lets you design pixel art clothes,
            decorate your store, and serve a cast of quirky characters — all from
            your browser.
          </p>
          <p style={{ marginBottom: 16 }}>
            Start with a small shop and a handful of basic patterns. As you sell
            clothes and earn money, unlock new design tools, furniture, and
            decorations. Arrange your boutique layout, create eye-catching window
            displays, and watch your reputation grow.
          </p>
          <p>
            Whether you love pixel art, fashion, or relaxing simulation games,
            ShopSt4r offers hours of creative, cozy gameplay with no download
            required.
          </p>
        </div>
      </section>

      {/* How to Play */}
      <section style={{ padding: "40px 0 60px" }}>
        <h2 className="pixel-font" style={sectionTitle}>
          HOW TO PLAY
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              step: "1",
              title: "Open Your Shop",
              desc: "Start the game in your browser. Your empty boutique is ready for you to make it shine.",
            },
            {
              step: "2",
              title: "Design Clothes",
              desc: "Use the design tool to create t-shirts, hoodies, and jackets with colors and pixel art graphics.",
            },
            {
              step: "3",
              title: "Serve Customers",
              desc: "Customers walk in looking for outfits. Show them your designs and make the sale.",
            },
            {
              step: "4",
              title: "Upgrade & Expand",
              desc: "Earn money to unlock new patterns, furniture, decor items, and powerful design abilities.",
            },
          ].map((s) => (
            <div
              key={s.step}
              style={{
                background: "#2a1e3e",
                border: "2px solid #362a50",
                borderRadius: 8,
                padding: "24px 20px",
                textAlign: "center",
              }}
            >
              <div
                className="pixel-font"
                style={{
                  fontSize: 24,
                  color: "#48c848",
                  marginBottom: 12,
                }}
              >
                {s.step}
              </div>
              <h3
                className="pixel-font"
                style={{ fontSize: 10, color: "#f8d028", marginBottom: 10 }}
              >
                {s.title}
              </h3>
              <p style={{ color: "#c8b8d8", fontSize: 14, lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a
            href="/how-to-play"
            style={{ color: "#e868a8", fontSize: 14, fontWeight: 600 }}
          >
            Read full guide →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 0 80px" }}>
        <h2 className="pixel-font" style={sectionTitle}>
          FAQ
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {faqs.map((f) => (
            <details
              key={f.q}
              style={{
                background: "#2a1e3e",
                border: "2px solid #362a50",
                borderRadius: 8,
                padding: "20px 24px",
              }}
            >
              <summary
                style={{
                  color: "#f8d028",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  lineHeight: 1.5,
                }}
              >
                {f.q}
              </summary>
              <p
                style={{
                  color: "#c8b8d8",
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginTop: 12,
                }}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
