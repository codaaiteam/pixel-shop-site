"use client";

import { useState, useRef, useCallback } from "react";

const features = [
  {
    icon: "👕",
    title: "设计服装",
    desc: "用像素画工具设计 T 恤、卫衣和夹克，搭配颜色、图案和多层设计。",
  },
  {
    icon: "🏪",
    title: "经营店铺",
    desc: "摆放家具、布置展示架，接待来店寻找心仪服装的顾客。",
  },
  {
    icon: "🎨",
    title: "装饰一切",
    desc: "设计花盆、雕塑、画作、灯具等装饰品，让你的精品店与众不同。",
  },
  {
    icon: "💰",
    title: "扩张帝国",
    desc: "赚取金币，解锁升级，购买新图案，扩大你的服装系列。",
  },
  {
    icon: "✉️",
    title: "邂逅角色",
    desc: "收到 Alyssa、Hope 等角色的来信，他们会对你的店铺和设计做出反应。",
  },
  {
    icon: "⭐",
    title: "解锁技能",
    desc: "购买「移动图案」和「设计装饰」等升级，解锁强大的创意工具。",
  },
];

const sectionTitle = {
  fontSize: 14,
  color: "#e868a8",
  marginBottom: 40,
  textAlign: "center" as const,
};

interface FAQ {
  q: string;
  a: string;
}

export default function ZhContent({ faqs }: { faqs: FAQ[] }) {
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!gameContainerRef.current) return;
    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <section style={{ padding: "32px 0 16px" }}>
          <img
            src="/logo.png"
            alt="ShopSt4r Logo"
            width={64}
            height={64}
            style={{
              display: "block",
              margin: "0 auto 12px",
              imageRendering: "pixelated",
              borderRadius: 8,
            }}
          />
          <h1
            className="pixel-font"
            style={{
              fontSize: 28,
              color: "#f8d028",
              marginBottom: 12,
              lineHeight: 1.6,
            }}
          >
            SHOPST4R
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#c8b8d8",
              maxWidth: 560,
              margin: "0 auto 8px",
              lineHeight: 1.8,
            }}
          >
            设计服装、经营店铺、打造你的梦想时尚帝国
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#e868a8",
              marginBottom: 4,
            }}
          >
            由一位 11 岁开发者使用 AI 工具在 2 天内打造
          </p>
          <p style={{ fontSize: 12, color: "#a898b8" }}>
            打开浏览器即可畅玩 — 免费、无需下载
          </p>
          <p style={{ fontSize: 11, color: "#a898b8", marginTop: 8 }}>
            <a href="/" style={{ color: "#6898c8" }}>
              English
            </a>
            {" · "}
            <span style={{ color: "#f8d028" }}>中文</span>
          </p>
        </section>
      </div>

      {/* Game */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 20px 24px",
        }}
      >
        <div
          ref={gameContainerRef}
          style={{
            position: "relative",
            width: "100%",
            height: "min(720px, 75vh)",
            minHeight: 400,
            border: "4px solid #5a3a18",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.5), 0 0 80px rgba(248,208,40,0.05)",
            background: "#000",
          }}
        >
          <iframe
            src="/game/index.html"
            title="ShopSt4r — 像素服装店游戏"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allowFullScreen
          />

          {!playing && (
            <div
              onClick={() => setPlaying(true)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 5,
              }}
            >
              <div
                className="pixel-font play-btn-circle"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(180deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
                  border: "4px solid #15803d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  color: "#fff",
                  boxShadow:
                    "0 6px 32px rgba(74,222,128,0.5), 0 0 80px rgba(74,222,128,0.2)",
                  marginBottom: 20,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                ▶
              </div>
              <div
                className="pixel-font"
                style={{
                  color: "#fff",
                  fontSize: 16,
                  marginBottom: 8,
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                立即开始游戏
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 13,
                }}
              >
                免费 · 无需下载 · 即点即玩
              </p>
            </div>
          )}

          {playing && (
            <button
              onClick={toggleFullscreen}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "rgba(0,0,0,0.7)",
                color: "#f8d028",
                border: "2px solid #5a3a18",
                borderRadius: 4,
                padding: "6px 12px",
                fontSize: 12,
                cursor: "pointer",
                zIndex: 10,
                fontFamily: "inherit",
              }}
              title="切换全屏"
            >
              {fullscreen ? "⊡ 退出全屏" : "⛶ 全屏"}
            </button>
          )}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#a898b8",
            fontSize: 13,
            marginTop: 12,
          }}
        >
          免费在线游玩 ShopSt4r — 温馨像素风服装店模拟经营游戏
        </p>
      </section>

      {/* Below content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        {/* Features */}
        <section style={{ padding: "40px 0 80px" }}>
          <h2
            className="pixel-font"
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#e868a8",
              marginBottom: 40,
            }}
          >
            游戏特色
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#2a1e3e",
                  border: "2px solid #362a50",
                  borderRadius: 8,
                  padding: "24px 20px",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3
                  className="pixel-font"
                  style={{ fontSize: 10, color: "#f8d028", marginBottom: 10 }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "#c8b8d8", fontSize: 14, lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What is ShopSt4r */}
        <section style={{ padding: "40px 0 60px" }}>
          <h2 className="pixel-font" style={sectionTitle}>
            什么是 SHOPST4R？
          </h2>
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
              是一款免费的浏览器像素风模拟经营游戏，你将经营自己的服装精品店。灵感来源于星露谷物语等温馨游戏和店铺经营模拟器，ShopSt4r
              让你设计像素风服装、装饰店铺、服务各种有趣的角色——全部在浏览器中完成。
            </p>
            <p style={{ marginBottom: 16 }}>
              从一家小店和几种基础图案开始。随着销售服装和赚取金币，解锁新的设计工具、家具和装饰品。布置你的精品店、打造吸引眼球的橱窗展示，看着你的声誉不断增长。
            </p>
            <p>
              无论你喜欢像素画、时尚还是轻松的模拟经营游戏，ShopSt4r
              都能提供数小时的创意休闲游戏体验，无需下载。一款用心打造的温馨像素游戏——由独立开发者用创意和热情构建。
            </p>
          </div>
        </section>

        {/* How to Play */}
        <section style={{ padding: "40px 0 60px" }}>
          <h2 className="pixel-font" style={sectionTitle}>
            怎么玩
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                step: "1",
                title: "开设店铺",
                desc: "在浏览器中启动游戏。你的空白精品店已经准备好，等你来装扮！",
              },
              {
                step: "2",
                title: "设计服装",
                desc: "使用设计工具，用颜色和像素图案制作 T 恤、卫衣和夹克。",
              },
              {
                step: "3",
                title: "接待顾客",
                desc: "顾客走进来寻找心仪的服装。展示你的设计，完成交易。",
              },
              {
                step: "4",
                title: "升级扩展",
                desc: "赚取金币解锁新图案、家具、装饰品和强大的设计技能。",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  background: "#2a1e3e",
                  border: "2px solid #362a50",
                  borderRadius: 8,
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <div
                  className="pixel-font"
                  style={{
                    fontSize: 24,
                    color: "#48c848",
                    marginBottom: 12,
                  }}
                >
                  {s.step}
                </div>
                <h3
                  className="pixel-font"
                  style={{ fontSize: 10, color: "#f8d028", marginBottom: 10 }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "#c8b8d8", fontSize: 14, lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "40px 0 80px" }}>
          <h2 className="pixel-font" style={sectionTitle}>
            常见问题
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                style={{
                  background: "#2a1e3e",
                  border: "2px solid #362a50",
                  borderRadius: 8,
                  padding: "20px 24px",
                }}
              >
                <summary
                  style={{
                    color: "#f8d028",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    lineHeight: 1.5,
                  }}
                >
                  {f.q}
                </summary>
                <p
                  style={{
                    color: "#c8b8d8",
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginTop: 12,
                  }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
