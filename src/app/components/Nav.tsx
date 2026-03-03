import { useEffect, useState } from "react";
import colorLogo from "../../assets/logo.png";
import { useIsMobile } from "../hooks/useIsMobile";

const links = ["Home", "About", "Features", "Pricing"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

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
          padding: isMobile ? "8px 20px" : "8px 32px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={colorLogo}
            alt="Yeyak"
            style={{
              height: 36,
              display: "block",
              mixBlendMode: "multiply",
              transform: "scale(3)",
              transformOrigin: "left center",
            }}
          />
        </div>

        {isMobile ? (
          /* Hamburger button */
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#1A1A2E",
                borderRadius: 2,
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 16,
                height: 2,
                background: "#1A1A2E",
                borderRadius: 2,
                transition: "opacity 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#1A1A2E",
                borderRadius: 2,
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        ) : (
          /* Desktop links */
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {links.map((link) => (
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
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            borderTop: "1px solid #E5E7EB",
            padding: "16px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 16,
                fontWeight: link === "About" ? 600 : 500,
                color: link === "About" ? "#005BF3" : "#1A1A2E",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #F3F4F6",
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
              padding: "12px 24px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 16,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
