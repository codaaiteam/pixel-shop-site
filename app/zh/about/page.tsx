import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于创作者 — ShopSt4r",
  description:
    "ShopSt4r 由一位 11 岁的开发者使用 AI 工具在 2 天内打造。了解这款温馨像素服装店游戏背后的故事。",
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
        认识创作者
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#e868a8",
          fontSize: 14,
          marginBottom: 32,
        }}
      >
        ShopSt4r 背后的故事
      </p>

      {/* Creator avatar */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <img
          src="/creator-avatar.png"
          alt="ShopSt4r 创作者 — 像素风肖像"
          width={160}
          height={160}
          style={{
            borderRadius: "50%",
            border: "4px solid #5a3a18",
            imageRendering: "pixelated",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        />
        <p
          className="pixel-font"
          style={{
            fontSize: 10,
            color: "#f8d028",
            marginTop: 12,
          }}
        >
          创作者，11岁
        </p>
      </div>

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
            <strong style={{ color: "#f8d028" }}>ShopSt4r</strong>{" "}
            由一位 11 岁的开发者在短短 2 天内使用 AI 辅助工具打造而成。
          </p>
          <p style={{ marginBottom: 16 }}>
            一个有趣的实验迅速变成了一款功能完整的像素风服装店模拟游戏——包含服装设计、顾客
            AI、店铺装饰、升级系统，以及会根据你的进度做出反应的角色邮件系统。
          </p>
          <p style={{ marginBottom: 16 }}>
            这个项目探索了创造力、游戏设计，以及年轻创作者如何利用现代 AI
            工具打造真正的产品。它证明了年龄不会限制你的创造力——只要有合适的工具和丰富的想象力。
          </p>
          <p>这只是一个开始。</p>
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
            数据一览
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
            }}
          >
            {[
              { num: "2", label: "天完成" },
              { num: "11", label: "岁开发者" },
              { num: "5", label: "个游戏系统" },
              { num: "100%", label: "免费游玩" },
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
            未来计划
          </h2>
          <ul
            style={{
              color: "#c8b8d8",
              fontSize: 14,
              lineHeight: 1.8,
              paddingLeft: 20,
            }}
          >
            <li>更多服装类型和设计选项</li>
            <li>新角色和更深入的故事线</li>
            <li>季节活动和限定道具</li>
            <li>社区功能和分享</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <a
          href="/zh"
          className="pixel-font"
          style={{
            display: "inline-block",
            background:
              "linear-gradient(180deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
            color: "#fff",
            padding: "14px 32px",
            fontSize: 12,
            border: "3px solid #15803d",
            borderRadius: 4,
            boxShadow: "0 4px 16px rgba(74,222,128,0.4)",
          }}
        >
          开始游戏
        </a>
      </div>
    </div>
  );
}
