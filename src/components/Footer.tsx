const links = ["Triatlón", "CrossFit", "Hyrox", "Eventos", "Comunidad"];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1A1A1A",
        paddingBlock: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "18px",
            fontWeight: 900,
            letterSpacing: "0.04em",
            color: "#666",
          }}
        >
          T<span style={{ color: "#CCFF00" }}>C</span>C
        </div>

        <ul style={{ display: "flex", gap: "20px", listStyle: "none", flexWrap: "wrap" }}>
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                style={{
                  fontSize: "12px",
                  color: "#666",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ABABAB")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#666")}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ fontSize: "12px", color: "#666" }}>
          © 2025 TCC. Train. Compete. Connect.
        </div>
      </div>
    </footer>
  );
}
