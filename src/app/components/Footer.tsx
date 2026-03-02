import whiteLogo from "figma:asset/9ac0193610fdd7862e1d5408b2e177826b55b72c.png";

export function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A2E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={whiteLogo} alt="Yeyak" style={{ height: 48, display: "block", opacity: 0.6 }} />
        </div>

        {/* Copyright */}
        <span
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          © 2025 Yeyak Inc. All rights reserved.
        </span>

        {/* Links */}
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "Contact", "Careers"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}