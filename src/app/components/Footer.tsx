import logo from "../../assets/logo.png";
import { useIsMobile } from "../hooks/useIsMobile";

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        background: "#1A1A2E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: isMobile ? "40px 20px" : "48px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          gap: isMobile ? 24 : 20,
          textAlign: isMobile ? "center" : undefined,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Yeyak" style={{ height: 64, display: "block", opacity: 0.6 }} />
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
        <div style={{ display: "flex", gap: isMobile ? 20 : 24, flexWrap: "wrap", justifyContent: "center" }}>
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
