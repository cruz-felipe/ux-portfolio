"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 2.5rem",
        background: scrolled ? "rgba(245,243,239,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(10,10,10,0.08)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Wordmark / Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Felipe Cruz">
          <rect width="32" height="32" fill="#E03030"/>
          <rect x="7" y="9" width="18" height="2.5" fill="white"/>
          <rect x="7" y="14.75" width="13" height="2.5" fill="white"/>
          <rect x="7" y="20.5" width="18" height="2.5" fill="white"/>
        </svg>
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: "var(--ink)",
        }}>
          Felipe Cruz
        </span>
      </Link>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--ink)",
              textDecoration: "none",
              letterSpacing: "0.01em",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
