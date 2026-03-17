import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Play — ShopSt4r",
  description:
    "Learn how to play ShopSt4r: create your character, design clothing, run your shop, and unlock upgrades.",
};

const steps = [
  {
    num: "01",
    title: "Create Your Character",
    text: "Pick your skin tone, hair style, hair color, eye color, and shirt color. This is your avatar for the game!",
  },
  {
    num: "02",
    title: "Name Your Shop",
    text: 'After creating your character, you\'ll name your boutique. Choose something fun like "Star Threads" or "Pixel Fashion".',
  },
  {
    num: "03",
    title: "Design Clothing",
    text: "Press the Design button to open the clothing designer. Pick a type (T-Shirt, Hoodie, Jacket), choose colors, and add pixel graphics like dogs, cats, flowers, and more.",
  },
  {
    num: "04",
    title: "Place Clothing in Your Shop",
    text: "Drag your designed clothing onto shelves and racks to display them for customers.",
  },
  {
    num: "05",
    title: "Start a Day",
    text: "Press Start Day to open your shop. Customers will walk in, browse, and buy clothing they like. You earn money!",
  },
  {
    num: "06",
    title: "Visit the Store",
    text: "After your first day, the Store tab unlocks. Buy new graphics, clothing patterns, furniture, decor, avatar accessories, and special abilities.",
  },
  {
    num: "07",
    title: "Unlock Abilities",
    text: "Buy the Design Decor Ability to design decorative items. Buy Move Graphics Ability to freely drag, duplicate, and layer multiple graphics on your designs.",
  },
  {
    num: "08",
    title: "Check Your Mail",
    text: "Characters like Alyssa and Hope will send you messages based on what you design and how your shop is doing.",
  },
];

export default function HowToPlay() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 20px" }}>
      <h1
        className="pixel-font"
        style={{
          fontSize: 18,
          color: "#f8d028",
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        HOW TO PLAY
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {steps.map((s) => (
          <div
            key={s.num}
            style={{
              display: "flex",
              gap: 20,
              background: "#2a1e3e",
              border: "2px solid #362a50",
              borderRadius: 8,
              padding: "20px 24px",
            }}
          >
            <span
              className="pixel-font"
              style={{
                fontSize: 20,
                color: "#e868a8",
                flexShrink: 0,
                width: 48,
              }}
            >
              {s.num}
            </span>
            <div>
              <h2
                className="pixel-font"
                style={{ fontSize: 10, color: "#f8d028", marginBottom: 8 }}
              >
                {s.title}
              </h2>
              <p style={{ color: "#c8b8d8", fontSize: 14, lineHeight: 1.7 }}>
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a
          href="/play"
          className="pixel-font"
          style={{
            display: "inline-block",
            background: "linear-gradient(180deg, #58b848 0%, #389828 100%)",
            color: "#fff",
            padding: "14px 32px",
            fontSize: 12,
            border: "3px solid #2a7818",
            borderRadius: 4,
          }}
        >
          START PLAYING
        </a>
      </div>
    </div>
  );
}
