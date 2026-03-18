import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "角色介绍 — ShopSt4r",
  description:
    "认识 ShopSt4r 中的角色：热爱猫咪的裁缝 Alyssa、樱花花店老板 Hope 等等。",
};

const characters = [
  {
    name: "Alyssa.S",
    email: "Alyssa_SewingClub@pix.wow",
    color: "#60e060",
    accent: "#303030",
    desc: "一位热爱你的服装的老奶奶。她是缝纫俱乐部的成员，钟爱纯色和花卉图案。她的头像是一只绿眼睛的黑猫——她是个十足的猫奴。",
    traits: ["猫咪爱好者", "缝纫俱乐部成员", "热爱花卉"],
  },
  {
    name: "Hope",
    email: "HopeBlossoms@pix.wow",
    color: "#f8a0b8",
    accent: "#fcc0d0",
    desc: "一位开朗的花店老板，会给你发送樱花主题的消息。Hope 在附近经营花店，喜欢看到有创意的设计。她会告诉你商店里有哪些令人兴奋的新升级。",
    traits: ["花店老板", "樱花", "鼓励型"],
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
        角色介绍
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#a898b8",
          marginBottom: 48,
          fontSize: 14,
        }}
      >
        经营精品店时你会遇到的朋友们
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
          更多角色即将推出
        </p>
      </div>
    </div>
  );
}
