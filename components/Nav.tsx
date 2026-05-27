"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Remove any dark theme remnants
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 80) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "work" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary navigation"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2.5rem",
          background: "color-mix(in srgb, var(--paper) 85%, transparent)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled || menuOpen ? "0.5px solid var(--border)" : "0.5px solid transparent",
          transition: "border-color 0.3s ease",
        }}
      >
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "1.3rem", zIndex: 101 }}>
          <img src="/logo.svg" alt="Felipe Cruz" style={{ height: "28px", width: "auto", display: "block", background: "none" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--ink)" }}>
            Felipe Cruz
          </span>
        </Link>

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {links.map(({ label, href }) => (
            <button key={label} onClick={() => scrollTo(href)}
              style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400, color: "var(--ink)", background: "none", border: "none", padding: "4px 0", cursor: "pointer", opacity: 0.5, transition: "opacity 0.2s", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
            >{label}</button>
          ))}
        </div>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{ display: "none", background: "none", border: "none", padding: "4px", cursor: "pointer", zIndex: 101 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="13" x2="14" y2="13" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2.5rem" }}
          onClick={() => setMenuOpen(false)}>
          {links.map(({ label, href }, i) => (
            <button key={label} onClick={() => { scrollTo(href); setMenuOpen(false); }}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 10vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--ink)", background: "none", border: "none", padding: "0.6rem 0", textAlign: "left", cursor: "pointer", lineHeight: 1.15, opacity: 0, animation: `fadeUp 0.4s ease ${i * 80}ms forwards`, width: "100%" }}>
              {label}
            </button>
          ))}
          <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>
      )}
    </>
  );
}
