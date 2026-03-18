"use client";

import { useState, useRef, useCallback } from "react";

const EMBED_CODE = `<iframe src="https://shopst4r.com/game/index.html" width="960" height="600" frameborder="0" allowfullscreen style="border:none;border-radius:8px;"></iframe>`;

const faqs = [
  {
    q: "Is ShopSt4r free to play?",
    a: "Yes, ShopSt4r is completely free to play in your browser. No download, installation, or sign-up is required — just visit the site and start playing. Your progress is saved automatically using your browser storage, so you can come back anytime and pick up where you left off.",
  },
  {
    q: "What devices can I play ShopSt4r on?",
    a: "ShopSt4r runs in any modern web browser on desktop, laptop, tablet, or phone. It works on Chrome, Firefox, Safari, and Edge. Since it's a browser game, there's no app to install — just open the page and play.",
  },
  {
    q: "How do I design clothes in ShopSt4r?",
    a: "Use the in-game pixel art design tool to create t-shirts, hoodies, and jackets. Pick from a palette of colors, add graphics, and layer patterns to make unique designs. As you progress and earn money, you'll unlock new patterns, color options, and powerful design abilities like Move Graphics and Design Decor.",
  },
  {
    q: "Is ShopSt4r similar to Stardew Valley?",
    a: "ShopSt4r shares the cozy pixel art aesthetic and relaxing simulation gameplay of Stardew Valley, but with a unique twist — instead of running a farm, you run a clothing boutique. If you enjoy creative, low-stress games where you can build something at your own pace, ShopSt4r is a great fit.",
  },
  {
    q: "Can I save my progress?",
    a: "Yes! Your game progress is automatically saved in your browser's local storage. There's no need to create an account or log in. Just close the tab and come back later — your shop, designs, and upgrades will all be waiting for you.",
  },
  {
    q: "How do I earn money in the game?",
    a: "You earn money by selling clothes and decorations to customers who visit your shop. Creating better designs, upgrading your shop layout, and earning higher star ratings from customers will all help you earn more. Use your earnings to unlock new patterns, furniture, decor items, and creative abilities.",
  },
];

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

function ShareEmbed() {
  const [showEmbed, setShowEmbed] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = "https://shopst4r.com";
  const shareText = "ShopSt4r — A cozy pixel shop game built by an 11-year-old in 2 days!";

  const copyEmbed = () => {
    navigator.clipboard.writeText(EMBED_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareReddit = () => {
    window.open(
      `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  };

  return (
    <div style={{ marginTop: 12 }}>
      {/* Share + Embed buttons row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={shareTwitter}
          style={{
            background: "#362a50",
            color: "#6898c8",
            border: "2px solid #4a3a68",
            borderRadius: 4,
            padding: "6px 14px",
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Share on X
        </button>
        <button
          onClick={shareReddit}
          style={{
            background: "#362a50",
            color: "#e868a8",
            border: "2px solid #4a3a68",
            borderRadius: 4,
            padding: "6px 14px",
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Share on Reddit
        </button>
        <button
          onClick={() => setShowEmbed(!showEmbed)}
          style={{
            background: showEmbed ? "#4a3a68" : "#362a50",
            color: "#f8d028",
            border: "2px solid #4a3a68",
            borderRadius: 4,
            padding: "6px 14px",
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {showEmbed ? "Hide Embed Code" : "&lt;/&gt; Embed"}
        </button>
      </div>

      {/* Embed code box */}
      {showEmbed && (
        <div
          style={{
            marginTop: 12,
            background: "#1a1028",
            border: "2px solid #362a50",
            borderRadius: 6,
            padding: "12px 16px",
            maxWidth: 700,
            margin: "12px auto 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ color: "#a898b8", fontSize: 12 }}>
              Embed this game on your site:
            </span>
            <button
              onClick={copyEmbed}
              style={{
                background: copied ? "#48c848" : "#f8d028",
                color: "#1a1028",
                border: "none",
                borderRadius: 4,
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <code
            style={{
              display: "block",
              background: "#0d0818",
              padding: "10px 12px",
              borderRadius: 4,
              color: "#48c848",
              fontSize: 11,
              lineHeight: 1.5,
              overflowX: "auto",
              whiteSpace: "pre",
              fontFamily: "monospace",
            }}
          >
            {EMBED_CODE}
          </code>
        </div>
      )}
    </div>
  );
}

export default function HomeContent() {
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!gameContainerRef.current) return;
    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }, []);

  return (
    <>
      {/* Hero — compact, just title + hook */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <section style={{ padding: "32px 0 16px" }}>
          <img
            src="/logo.png"
            alt="ShopSt4r Logo"
            width={64}
            height={64}
            style={{
              display: "block",
              margin: "0 auto 12px",
              imageRendering: "pixelated",
              borderRadius: 8,
            }}
          />
          <h1
            className="pixel-font"
            style={{
              fontSize: 28,
              color: "#f8d028",
              marginBottom: 12,
              lineHeight: 1.6,
            }}
          >
            SHOPST4R
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#c8b8d8",
              maxWidth: 560,
              margin: "0 auto 8px",
              lineHeight: 1.7,
            }}
          >
            Design clothes, run your shop, and build your dream fashion empire
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#e868a8",
              marginBottom: 4,
            }}
          >
            Built by an 11-year-old developer using AI tools in just 2 days
          </p>
          <p style={{ fontSize: 12, color: "#a898b8" }}>
            Play instantly in your browser — no download required
          </p>
        </section>
      </div>

      {/* Game Container — wide, prominent, first screen */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 20px 24px",
        }}
      >
        <div
          ref={gameContainerRef}
          style={{
            position: "relative",
            width: "100%",
            height: "min(720px, 75vh)",
            minHeight: 400,
            border: "4px solid #5a3a18",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.5), 0 0 80px rgba(248,208,40,0.05)",
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

          {/* Play overlay */}
          {!playing && (
            <div
              onClick={() => setPlaying(true)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 5,
              }}
            >
              <div
                className="pixel-font play-btn-circle"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(180deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
                  border: "4px solid #15803d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  color: "#fff",
                  boxShadow:
                    "0 6px 32px rgba(74,222,128,0.5), 0 0 80px rgba(74,222,128,0.2)",
                  marginBottom: 20,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                ▶
              </div>
              <div
                className="pixel-font"
                style={{
                  color: "#fff",
                  fontSize: 16,
                  marginBottom: 8,
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                Play ShopSt4r Now
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 13,
                }}
              >
                Free &middot; No Download &middot; Instant Play
              </p>
            </div>
          )}

          {/* Fullscreen button — visible after playing */}
          {playing && (
            <button
              onClick={toggleFullscreen}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "rgba(0,0,0,0.7)",
                color: "#f8d028",
                border: "2px solid #5a3a18",
                borderRadius: 4,
                padding: "6px 12px",
                fontSize: 12,
                cursor: "pointer",
                zIndex: 10,
                fontFamily: "inherit",
              }}
              title="Toggle fullscreen"
            >
              {fullscreen ? "⊡ EXIT" : "⛶ FULLSCREEN"}
            </button>
          )}
        </div>

        {/* Share + Embed bar under game */}
        <ShareEmbed />

        {/* SEO keyword line */}
        <p
          style={{
            textAlign: "center",
            color: "#a898b8",
            fontSize: 13,
            marginTop: 8,
          }}
        >
          Play ShopSt4r Online Free — Cozy Pixel Shop Simulator
        </p>
      </section>

      {/* Everything below in narrower container */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
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
              decorate your store, and serve a cast of quirky characters — all
              from your browser.
            </p>
            <p style={{ marginBottom: 16 }}>
              Start with a small shop and a handful of basic patterns. As you
              sell clothes and earn money, unlock new design tools, furniture,
              and decorations. Arrange your boutique layout, create eye-catching
              window displays, and watch your reputation grow.
            </p>
            <p>
              Whether you love pixel art, fashion, or relaxing simulation games,
              ShopSt4r offers hours of creative, cozy gameplay with no download
              required. A cozy pixel game made with love — built as a creative
              indie project for players who enjoy designing and building at their
              own pace.
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

        {/* FAQ — first one open by default */}
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
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
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
    </>
  );
}
