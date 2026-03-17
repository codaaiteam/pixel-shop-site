import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Creator — ShopSt4r",
  description:
    "ShopSt4r was created by an 11-year-old developer using AI tools in just 2 days. Learn the story behind this cozy pixel shop game.",
};

export default function About() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 20px" }}>
      <h1
        className="pixel-font"
        style={{
          fontSize: 18,
          color: "#f8d028",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        MEET THE CREATOR
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#e868a8",
          fontSize: 14,
          marginBottom: 48,
        }}
      >
        The story behind ShopSt4r
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
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
            <strong style={{ color: "#f8d028" }}>ShopSt4r</strong> was created by
            an 11-year-old developer in just 2 days using AI-assisted tools.
          </p>
          <p style={{ marginBottom: 16 }}>
            What started as a fun experiment quickly turned into a fully playable
            pixel shop simulation game — complete with clothing design, customer
            AI, shop decoration, upgrades, and a mail system with characters who
            react to your progress.
          </p>
          <p style={{ marginBottom: 16 }}>
            The project explores creativity, game design, and how young creators
            can build real products using modern AI tools. It shows that age
            doesn&apos;t limit what you can create when you have the right tools
            and a lot of imagination.
          </p>
          <p>This is just the beginning.</p>
        </div>

        <div
          style={{
            background: "#2a1e3e",
            border: "2px solid #362a50",
            borderRadius: 8,
            padding: "28px",
          }}
        >
          <h2
            className="pixel-font"
            style={{
              fontSize: 10,
              color: "#48c848",
              marginBottom: 20,
            }}
          >
            BY THE NUMBERS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
            }}
          >
            {[
              { num: "2", label: "Days to Build" },
              { num: "11", label: "Years Old" },
              { num: "5", label: "Game Systems" },
              { num: "100%", label: "Free to Play" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  className="pixel-font"
                  style={{
                    fontSize: 24,
                    color: "#f8d028",
                    marginBottom: 6,
                  }}
                >
                  {s.num}
                </div>
                <div style={{ color: "#a898b8", fontSize: 12 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "#2a1e3e",
            border: "2px solid #362a50",
            borderRadius: 8,
            padding: "28px",
          }}
        >
          <h2
            className="pixel-font"
            style={{
              fontSize: 10,
              color: "#e868a8",
              marginBottom: 16,
            }}
          >
            WHAT&apos;S NEXT
          </h2>
          <ul
            style={{
              color: "#c8b8d8",
              fontSize: 14,
              lineHeight: 1.8,
              paddingLeft: 20,
            }}
          >
            <li>More clothing types and design options</li>
            <li>New characters with deeper storylines</li>
            <li>Seasonal events and limited-edition items</li>
            <li>Community features and sharing</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <a
          href="/"
          className="pixel-font"
          style={{
            display: "inline-block",
            background: "linear-gradient(180deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
            color: "#fff",
            padding: "14px 32px",
            fontSize: 12,
            border: "3px solid #15803d",
            borderRadius: 4,
            boxShadow: "0 4px 16px rgba(74,222,128,0.4)",
          }}
        >
          PLAY SHOPST4R
        </a>
      </div>
    </div>
  );
}
