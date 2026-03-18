import type { Metadata } from "next";
import Script from "next/script";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "ShopSt4r — Run Your Own Pixel Art Clothing Boutique",
  description:
    "Design pixel art clothes, decorate your shop, serve quirky customers, and grow your fashion empire. Play free in your browser!",
  alternates: {
    canonical: "https://shopst4r.com",
    languages: {
      en: "https://shopst4r.com",
      zh: "https://shopst4r.com/zh",
    },
  },
};

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
    "Run your own pixel art clothing boutique. Design clothes, decorate your shop, serve customers, and grow your fashion empire.",
  genre: ["Simulation", "Casual", "Pixel Art"],
  gamePlatform: "Web Browser",
  applicationCategory: "Game",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://shopst4r.com",
  playMode: "SinglePlayer",
};

export default function Home() {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="game-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
