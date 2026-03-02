import { useEffect, useState } from "react";
import colorLogo from "../../assets/logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid #E5E7EB",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 32px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={colorLogo} alt="Yeyak" style={{ height: 36, display: "block" }} />
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Home", "About", "Features", "Pricing"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: 14,
                fontWeight: link === "About" ? 600 : 500,
                color: link === "About" ? "#005BF3" : "#6B7280",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.2s",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            style={{
              background: "#005BF3",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
              fontFamily: "'DM Sans', sans-serif",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}