import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devlog — ShopSt4r",
  description:
    "Follow the development of ShopSt4r. See what's been added, what's coming next, and the journey of building a pixel art shop game.",
};

const entries = [
  {
    date: "March 2026",
    title: "Move Graphics Ability",
    content:
      "Added the Move Graphics Ability upgrade. Players can now drag graphics freely, place multiple copies of the same graphic, and layer different graphics on a single design. Works for both clothing and decor.",
  },
  {
    date: "March 2026",
    title: "Design Decor System",
    content:
      "Introduced the Design Decor Ability. Players can now design 8 types of decorative items: Pots, Night Lights, Sculptures, Paintings, Wall Plants, Table Plants, Picture Frames, and Small Lamps. Sculptures come with special shapes — Cat, Dog, and Bunny.",
  },
  {
    date: "March 2026",
    title: "Mail System & Characters",
    content:
      "Added a mail system with notification badges and pop sounds. Alyssa.S and Hope now send messages based on your progress. They react to your clothing designs and let you know about new store items.",
  },
  {
    date: "March 2026",
    title: "Store & Upgrades",
    content:
      "Built the full store system with 4 tabs: Supplies, Furniture, Decor, and Clothing. Players can buy graphic packs, clothing patterns, furniture, decorative items, avatar accessories, and special abilities.",
  },
  {
    date: "February 2026",
    title: "Core Game Launch",
    content:
      "Initial release of ShopSt4r! Character creation, shop naming, clothing design with colors and graphics, customer AI, day/night cycle, drag-and-drop furniture placement, and auto-save.",
  },
];

export default function Devlog() {
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
        DEVLOG
      </h1>

      <div
        style={{
          borderLeft: "3px solid #362a50",
          paddingLeft: 28,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {entries.map((e, i) => (
          <div key={i} style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: -36,
                top: 6,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: i === 0 ? "#48c848" : "#e868a8",
                border: "2px solid #1a1028",
              }}
            />
            <span
              className="pixel-font"
              style={{ fontSize: 7, color: "#a898b8" }}
            >
              {e.date}
            </span>
            <h2
              className="pixel-font"
              style={{
                fontSize: 11,
                color: "#f8d028",
                marginTop: 6,
                marginBottom: 10,
              }}
            >
              {e.title}
            </h2>
            <p style={{ color: "#c8b8d8", fontSize: 14, lineHeight: 1.7 }}>
              {e.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
