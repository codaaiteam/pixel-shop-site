import type { Metadata } from "next";
import Script from "next/script";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "ShopSt4r — Run Your Own Pixel Art Clothing Boutique",
  description:
    "Design pixel art clothes, decorate your shop, serve quirky customers, and grow your fashion empire. Play free in your browser!",
};

const faqs = [
  {
    q: "Is ShopSt4r free to play?",
    a: "Yes! ShopSt4r is completely free. Just open your browser and start playing — no download or sign-up required.",
  },
  {
    q: "What devices can I play ShopSt4r on?",
    a: "ShopSt4r runs in any modern web browser on desktop, laptop, tablet, or phone. No app install needed.",
  },
  {
    q: "How do I design clothes in ShopSt4r?",
    a: "Use the in-game design tool to pick colors, add graphics, and layer patterns onto t-shirts, hoodies, and jackets. Unlock more options as you progress.",
  },
  {
    q: "Is ShopSt4r similar to Stardew Valley?",
    a: "ShopSt4r shares the cozy pixel art style and simulation gameplay of Stardew Valley, but focuses on running a clothing boutique instead of a farm.",
  },
  {
    q: "Can I save my progress?",
    a: "Yes, your progress is automatically saved in your browser. You can pick up right where you left off.",
  },
  {
    q: "How do I earn money in the game?",
    a: "Sell clothes and decorations to customers who visit your shop. Better designs and higher star ratings earn more money.",
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
