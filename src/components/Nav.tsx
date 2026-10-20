"use client";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "58px",
        background: "rgba(8,8,8,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #1A1A1A",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(16px, 5vw, 48px)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "22px",
            fontWeight: 900,
            letterSpacing: "0.04em",
            color: "#F2F2EF",
          }}
        >
          T<span style={{ color: "#CCFF00" }}>C</span>C
        </div>

        {/* Links — hidden on mobile */}
        <ul
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            listStyle: "none",
          }}
        >
          {["Triatlón", "CrossFit", "Hyrox", "Carreras"].map((item) => (
            <li key={item}>
              <a
                href="#"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#ABABAB",
                  letterSpacing: "0.02em",
                  transition: "color 0.15s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#F2F2EF")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#ABABAB")
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          style={{
            height: "34px",
            padding: "0 18px",
            background: "#CCFF00",
            color: "#080808",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          Únete
        </button>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
