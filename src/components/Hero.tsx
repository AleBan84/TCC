"use client";
import { useState } from "react";

const disciplines = [
  { label: "Triatlón",  icon: "🏊", active: true },
  { label: "CrossFit",  icon: "🏋️" },
  { label: "Hyrox",     icon: "🔥" },
  { label: "Duatlón",   icon: "🚴" },
  { label: "Running",   icon: "🏃" },
  { label: "Natación",  icon: "🏊" },
  { label: "Fitness",   icon: "⚡" },
];

export default function Hero() {
  const [active, setActive] = useState("Triatlón");

  return (
    <section
      style={{
        paddingTop: "calc(58px + 72px)",
        paddingBottom: "80px",
        paddingLeft: "clamp(16px, 5vw, 48px)",
        paddingRight: "clamp(16px, 5vw, 48px)",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#CCFF00",
          marginBottom: "24px",
        }}
      >
        <span style={{ width: "20px", height: "1px", background: "#CCFF00", display: "inline-block" }} />
        Comunidad de deportistas competitivos
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(68px, 14vw, 130px)",
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "#F2F2EF",
          marginBottom: "32px",
        }}
      >
        Train.<br />
        Compete.<br />
        <span style={{ color: "#CCFF00" }}>Connect.</span>
      </h1>

      {/* Sub */}
      <p
        style={{
          maxWidth: "520px",
          fontSize: "clamp(15px, 2vw, 17px)",
          color: "#ABABAB",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        Todo lo que necesitas para prepararte, competir y crecer en triatlón,
        CrossFit, Hyrox y más deportes competitivos. Guías, eventos y comunidad
        en un solo lugar.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "56px" }}>
        <button
          style={{
            height: "48px",
            padding: "0 28px",
            background: "#CCFF00",
            color: "#080808",
            fontSize: "14px",
            fontWeight: 600,
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Crear mi perfil
        </button>
        <button
          style={{
            height: "48px",
            padding: "0 28px",
            background: "transparent",
            color: "#F2F2EF",
            fontSize: "14px",
            fontWeight: 500,
            border: "1px solid #3A3A3A",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "border-color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#ABABAB")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#3A3A3A")}
        >
          Explorar disciplinas
        </button>
      </div>

      {/* Discipline pills */}
      <div className="pills-scroll">
        {disciplines.map((d) => (
          <button
            key={d.label}
            onClick={() => setActive(d.label)}
            style={{
              flexShrink: 0,
              height: "34px",
              padding: "0 16px",
              borderRadius: "100px",
              border: `1px solid ${active === d.label ? "#CCFF00" : "#1A1A1A"}`,
              background: active === d.label ? "rgba(204,255,0,0.08)" : "#0F0F0F",
              fontSize: "13px",
              fontWeight: 500,
              color: active === d.label ? "#CCFF00" : "#ABABAB",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              cursor: "pointer",
              transition: "border-color 0.15s, color 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "15px" }}>{d.icon}</span>
            {d.label}
          </button>
        ))}
      </div>
    </section>
  );
}
