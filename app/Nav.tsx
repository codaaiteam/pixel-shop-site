"use client";

import { usePathname, useRouter } from "next/navigation";

const enLinks = [
  { href: "/play", label: "Play", color: "#48c848" },
  { href: "/how-to-play", label: "How to Play" },
  { href: "/characters", label: "Characters" },
  { href: "/devlog", label: "Devlog" },
  { href: "/about", label: "About" },
];

const zhLinks = [
  { href: "/zh", label: "游玩", color: "#48c848" },
  { href: "/zh/how-to-play", label: "玩法" },
  { href: "/zh/characters", label: "角色" },
  { href: "/zh/devlog", label: "开发日志" },
  { href: "/zh/about", label: "关于" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const isZh = pathname.startsWith("/zh");
  const links = isZh ? zhLinks : enLinks;

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    if (lang === "zh" && !isZh) {
      router.push(`/zh${pathname === "/" ? "" : pathname}`);
    } else if (lang === "en" && isZh) {
      router.push(pathname.replace(/^\/zh/, "") || "/");
    }
  };

  return (
    <nav
      style={{
        background: "#2a1e3e",
        borderBottom: "3px solid #5a3a18",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <a
        href={isZh ? "/zh" : "/"}
        className="pixel-font"
        style={{ color: "#f8d028", fontSize: 14, letterSpacing: 2 }}
      >
        SHOPST4R
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: l.color || "#f0e8f8",
              fontWeight: l.color ? 600 : 500,
            }}
          >
            {l.label}
          </a>
        ))}
        <select
          value={isZh ? "zh" : "en"}
          onChange={handleLangChange}
          style={{
            background: "#362a50",
            color: "#f8d028",
            border: "2px solid #5a3a18",
            borderRadius: 4,
            padding: "4px 8px",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </nav>
  );
}
