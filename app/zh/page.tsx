import type { Metadata } from "next";
import Script from "next/script";
import ZhContent from "./ZhContent";

export const metadata: Metadata = {
  title: "ShopSt4r — 经营你的像素服装店 | 免费浏览器游戏",
  description:
    "设计像素风服装、装饰你的店铺、服务顾客、打造时尚帝国。免费在线游戏，无需下载，打开浏览器即可畅玩！",
  keywords: [
    "像素游戏",
    "服装店游戏",
    "浏览器游戏",
    "模拟经营",
    "免费游戏",
    "像素风",
    "休闲游戏",
    "时装店模拟器",
  ],
  alternates: {
    canonical: "https://shopst4r.com/zh",
    languages: {
      en: "https://shopst4r.com",
      zh: "https://shopst4r.com/zh",
    },
  },
};

const faqs = [
  {
    q: "ShopSt4r 是免费的吗？",
    a: "是的，ShopSt4r 完全免费！无需下载、安装或注册，直接在浏览器中打开即可开始游戏。你的进度会自动保存在浏览器中，随时可以回来继续游玩。",
  },
  {
    q: "支持哪些设备？",
    a: "ShopSt4r 可以在任何现代浏览器上运行，包括电脑、笔记本、平板和手机。支持 Chrome、Firefox、Safari 和 Edge。无需安装任何应用。",
  },
  {
    q: "怎么设计衣服？",
    a: "使用游戏内的像素画设计工具来制作 T 恤、卫衣和夹克。选择颜色、添加图案、叠加图层来创造独特的设计。随着游戏进展和赚钱，你将解锁更多图案、配色和强大的设计能力。",
  },
  {
    q: "ShopSt4r 和星露谷物语类似吗？",
    a: "ShopSt4r 拥有与星露谷物语相似的温馨像素风格和轻松的模拟经营玩法，但有一个独特的设定——你经营的不是农场，而是一家服装店。如果你喜欢创造性的、无压力的、按自己节奏建造的游戏，ShopSt4r 非常适合你。",
  },
  {
    q: "可以保存进度吗？",
    a: "可以！游戏进度会自动保存在浏览器的本地存储中。无需创建账号或登录。关闭标签页后随时回来，你的店铺、设计和升级都会在那里等你。",
  },
  {
    q: "怎么在游戏中赚钱？",
    a: "通过向来店的顾客出售服装和装饰品来赚钱。更好的设计、升级后的店铺布局和更高的顾客评分都能帮你赚更多钱。用赚到的钱解锁新图案、家具、装饰品和创意能力。",
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
    "经营你自己的像素服装店。设计衣服、装饰店铺、服务顾客、打造时尚帝国。",
  genre: ["模拟经营", "休闲", "像素风"],
  gamePlatform: "Web Browser",
  applicationCategory: "Game",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://shopst4r.com/zh",
  playMode: "SinglePlayer",
  inLanguage: "zh",
};

export default function ZhPage() {
  return (
    <>
      <Script
        id="faq-jsonld-zh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="game-jsonld-zh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />
      <ZhContent faqs={faqs} />
    </>
  );
}
