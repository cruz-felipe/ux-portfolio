"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "4rem 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "end",
      }}
    >
      {/* Left — CTA */}
      <div>
        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "1.5rem",
        }}>
          Contact
        </h2>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--ink)",
          marginBottom: "2rem",
        }}>
          Engage.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="mailto:fcruz@outlook.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              color: "white",
              background: "var(--red)",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "2px",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--red-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--red)")}
          >
            Send me an email
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/fmcruz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--ink)",
              textDecoration: "none",
              border: "1px solid var(--border)",
              padding: "10px 20px",
              borderRadius: "2px",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://www.artstation.com/felipecruz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--ink)",
              textDecoration: "none",
              border: "1px solid var(--border)",
              padding: "10px 20px",
              borderRadius: "2px",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            Art & Illustration
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Right — Colophon */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
        <div style={{ marginBottom: "0.25rem" }}>
          <>
            <img src="/logo.svg" alt="Felipe Cruz" className="footer-logo-light" style={{ height: "24px", width: "auto", display: "block" }} />
            <img src="/logo-dark.svg" alt="Felipe Cruz" className="footer-logo-dark" style={{ height: "24px", width: "auto", display: "none" }} />
          </>
        </div>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)" }}>
          Senior UI Designer · Team Lead
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)", opacity: 0.6 }}>
          Netcracker Technology · São Paulo, Brazil
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)", marginTop: "1rem", opacity: 0.5 }}>
          © {year}
        </span>
      </div>
    </footer>
  );
}
