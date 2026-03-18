import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "游戏攻略 — ShopSt4r",
  description:
    "学习如何玩 ShopSt4r：创建角色、设计服装、经营店铺、解锁升级。",
};

const steps = [
  {
    num: "01",
    title: "创建你的角色",
    text: "选择肤色、发型、发色、眼睛颜色和衬衫颜色。这就是你在游戏中的形象！",
  },
  {
    num: "02",
    title: "为店铺命名",
    text: "创建角色后，给你的精品店取一个名字。选一个有趣的名字，比如「星线坊」或「像素时尚」。",
  },
  {
    num: "03",
    title: "设计服装",
    text: "点击「设计」按钮打开服装设计器。选择类型（T恤、卫衣、夹克），选择颜色，添加像素图案，如小狗、小猫、花朵等等。",
  },
  {
    num: "04",
    title: "在店里展示服装",
    text: "把你设计好的服装拖到货架和衣架上，展示给顾客看。",
  },
  {
    num: "05",
    title: "开始营业",
    text: "点击「开始新一天」打开店铺。顾客会走进来，浏览，然后购买他们喜欢的服装。你就能赚钱了！",
  },
  {
    num: "06",
    title: "逛商店",
    text: "第一天营业结束后，商店标签解锁。购买新图案、服装版型、家具、装饰品、角色配饰和特殊技能。",
  },
  {
    num: "07",
    title: "解锁技能",
    text: "购买「设计装饰」技能来设计装饰品。购买「移动图案」技能来自由拖动、复制和叠加多个图案到你的设计上。",
  },
  {
    num: "08",
    title: "查看邮件",
    text: "Alyssa 和 Hope 等角色会根据你的设计和店铺经营情况给你发送消息。",
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
        游戏攻略
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
          href="/zh"
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
          开始游戏
        </a>
      </div>
    </div>
  );
}
