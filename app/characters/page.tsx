import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters — ShopSt4r",
  description:
    "Meet the characters of ShopSt4r: Alyssa the cat-loving seamstress, Hope the cherry blossom florist, and more.",
};

const characters = [
  {
    name: "Alyssa.S",
    email: "Alyssa_SewingClub@pix.wow",
    color: "#60e060",
    accent: "#303030",
    desc: "An elderly woman who loves your clothing. She's a member of the sewing club and adores solid colors and floral patterns. Her profile picture is a black cat with green eyes — she's a total cat lady.",
    traits: ["Cat lover", "Sewing club member", "Loves florals"],
  },
  {
    name: "Hope",
    email: "HopeBlossoms@pix.wow",
    color: "#f8a0b8",
    accent: "#fcc0d0",
    desc: "A cheerful florist who sends you cherry blossom-themed messages. Hope runs a flower shop nearby and loves seeing creative designs. She'll tell you about exciting new upgrades available in the store.",
    traits: ["Florist", "Cherry blossoms", "Encouraging"],
  },
];

export default function Characters() {
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
        CHARACTERS
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#a898b8",
          marginBottom: 48,
          fontSize: 14,
        }}
      >
        The people you&apos;ll meet while running your boutique.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {characters.map((c) => (
          <div
            key={c.name}
            style={{
              background: "#2a1e3e",
              border: "2px solid #362a50",
              borderRadius: 8,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.accent,
                  border: `3px solid ${c.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="pixel-font"
                  style={{ fontSize: 14, color: c.color }}
                >
                  {c.name[0]}
                </span>
              </div>
              <div>
                <h2
                  className="pixel-font"
                  style={{ fontSize: 12, color: c.color }}
                >
                  {c.name}
                </h2>
                <p style={{ color: "#a898b8", fontSize: 11, marginTop: 4 }}>
                  {c.email}
                </p>
              </div>
            </div>
            <p
              style={{
                color: "#c8b8d8",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              {c.desc}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {c.traits.map((t) => (
                <span
                  key={t}
                  className="pixel-font"
                  style={{
                    fontSize: 7,
                    background: "#362a50",
                    color: c.color,
                    padding: "6px 10px",
                    borderRadius: 4,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 48,
          color: "#a898b8",
          fontSize: 13,
        }}
      >
        <p className="pixel-font" style={{ fontSize: 8, color: "#e868a8" }}>
          MORE CHARACTERS COMING SOON
        </p>
      </div>
    </div>
  );
}
