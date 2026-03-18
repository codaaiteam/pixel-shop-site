import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "开发日志 — ShopSt4r",
  description:
    "跟踪 ShopSt4r 的开发进程。了解最新更新、即将推出的功能，以及制作像素服装店游戏的旅程。",
};

const entries = [
  {
    date: "2026年3月",
    title: "2天完成 — ShopSt4r 的故事",
    content:
      "ShopSt4r 由一位 11 岁的开发者在短短两天内使用 AI 辅助工具打造而成。目标是创建一款温馨的店铺模拟游戏，让玩家可以设计像素风服装并经营自己的精品店。一个有趣的实验变成了一款功能完整的游戏，包含角色创建、顾客 AI、设计工具、店铺装饰、升级系统、邮件系统等等。这个项目展示了当创造力遇上现代 AI 工具时的无限可能——无论你多大年纪。",
  },
  {
    date: "2026年3月",
    title: "移动图案技能",
    content:
      "新增「移动图案」升级技能。玩家现在可以自由拖动图案、放置同一图案的多个副本，并在单个设计上叠加不同图案。同时适用于服装和装饰品设计。",
  },
  {
    date: "2026年3月",
    title: "设计装饰系统",
    content:
      "推出「设计装饰」技能。玩家现在可以设计 8 种装饰品：花盆、夜灯、雕塑、画作、墙面植物、桌面植物、相框和小台灯。雕塑还有特殊造型——猫、狗和兔子。",
  },
  {
    date: "2026年3月",
    title: "邮件系统与角色",
    content:
      "新增带通知徽章和提示音的邮件系统。Alyssa.S 和 Hope 现在会根据你的游戏进度发送消息。她们会对你的服装设计做出反应，并告诉你商店的新商品。",
  },
  {
    date: "2026年3月",
    title: "商店与升级系统",
    content:
      "构建了完整的商店系统，包含 4 个标签：耗材、家具、装饰品和服装。玩家可以购买图案包、服装版型、家具、装饰品、角色配饰和特殊技能。",
  },
  {
    date: "2026年2月",
    title: "核心游戏发布",
    content:
      "ShopSt4r 首次发布！包含角色创建、店铺命名、服装颜色和图案设计、顾客 AI、昼夜循环、拖放式家具摆放和自动存档。",
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
        开发日志
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
