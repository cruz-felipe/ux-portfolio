"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-label="Contact and links" style={{ borderTop: "1px solid var(--border)", overflow: "hidden", position: "relative" }}>

      {/* Top — editorial CTA */}
      <div style={{ padding: "6rem 2.5rem 4rem", position: "relative" }}>
        {/* Decorative ghost text */}
        <div style={{
          position: "absolute", bottom: "2rem", right: "-1rem",
          fontFamily: "var(--font-display)", fontSize: "clamp(80px, 14vw, 180px)",
          fontWeight: 800, lineHeight: 1, letterSpacing: "-0.05em",
          color: "var(--ink)", opacity: 0.03,
          pointerEvents: "none", userSelect: "none",
        }}>TALK</div>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 1.5rem" }}>
          Contact
        </p>

        {/* Giant headline — the primary CTA itself */}
        <a href="mailto:fcruz@outlook.com" style={{
          display: "block",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.8rem, 7vw, 7rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "var(--ink)",
          textDecoration: "none",
          marginBottom: "3rem",
          transition: "color 0.2s",
          position: "relative",
          width: "fit-content",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
        >
          Get in touch.
        </a>

        {/* CTA row — three distinct actions with clear visual roles */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>

          {/* Primary: filled — the action to take */}
          <a href="mailto:fcruz@outlook.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500,
              color: "white", background: "var(--ink)",
              textDecoration: "none", padding: "10px 20px",
              borderRadius: "2px", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--red)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
          >
            Send email
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Divider */}
          <span style={{ width: "1px", height: "20px", background: "var(--border)", flexShrink: 0 }} aria-hidden="true" />

          {/* Secondary: outlined peers — professional context */}
          <a href="https://linkedin.com/in/fmcruz" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400,
              color: "var(--ink)", textDecoration: "none",
              border: "1px solid var(--border)", padding: "10px 18px",
              borderRadius: "2px", transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            LinkedIn
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ opacity: 0.5 }}>
              <path d="M1 9L9 1M9 1H4M9 1v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="https://www.artstation.com/felipecruz" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400,
              color: "var(--ink)", textDecoration: "none",
              border: "1px solid var(--border)", padding: "10px 18px",
              borderRadius: "2px", transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            Illustration
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ opacity: 0.5 }}>
              <path d="M1 9L9 1M9 1H4M9 1v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <img src="/logo.svg" alt="Felipe Cruz" style={{ height: "20px", width: "auto", display: "block", background: "none" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)" }}>Senior UI Designer · Team Lead · São Paulo, Brazil</span>
        </div>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)", opacity: 0.5 }}>© {year}</span>
      </div>
    </footer>
  );
}
