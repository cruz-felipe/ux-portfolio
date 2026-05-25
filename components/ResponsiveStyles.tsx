export default function ResponsiveStyles() {
  return (
    <style>{`
      /* ── Hero sub-headline layout ── */
      .hero-sub {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        max-width: 860px;
      }
      .hero-bio {
        font-family: var(--font-body);
        font-size: clamp(1rem, 1.3vw, 1.1rem);
        font-weight: 300;
        line-height: 1.7;
        color: var(--ink);
        opacity: 0.82;
        margin: 0;
      }
      .hero-role {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.4rem;
        padding-top: 0.15rem;
      }
      .hero-role-label {
        font-family: var(--font-body);
        font-size: 11px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--muted);
      }
      .hero-role-title {
        font-family: var(--font-display);
        font-size: 14px;
        font-weight: 600;
        color: var(--ink);
        line-height: 1.6;
      }

      /* ── About layout ── */
      .about-top {
        display: grid;
        grid-template-columns: 260px 1fr;
        gap: 4rem;
        align-items: flex-start;
      }
      .about-bottom {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
      }

      /* ── Nav ── */
      .nav-hamburger { display: none !important; }
      .nav-desktop { display: flex !important; }

      /* ── Tablet ── */
      @media (max-width: 900px) {
        .about-top {
          grid-template-columns: 200px 1fr;
          gap: 2.5rem;
        }
        .about-bottom {
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .signal-strip-inner {
          grid-template-columns: 1fr 1fr !important;
        }
        .signal-strip-inner > div:nth-child(2) {
          border-right: none !important;
        }
        .signal-strip-inner > div:nth-child(3),
        .signal-strip-inner > div:nth-child(4) {
          padding-top: 2rem !important;
          border-top: 0.5px solid var(--border) !important;
        }
      }

      /* ── Mobile ── */
      @media (max-width: 680px) {
        /* Nav */
        .nav-hamburger { display: block !important; }
        .nav-desktop { display: none !important; }
        nav { padding: 1rem 1.25rem !important; }

        /* Hero */
        section[style*="8rem 2.5rem"] {
          padding: 7rem 1.25rem 4rem !important;
        }
        .hero-sub {
          grid-template-columns: 1fr !important;
          gap: 1.5rem !important;
          max-width: 100% !important;
        }
        .hero-role {
          padding-top: 0 !important;
          padding-left: 0 !important;
          border-left: 2px solid var(--red);
          padding-left: 1rem !important;
        }

        /* Signal strip */
        .signal-strip-inner {
          grid-template-columns: 1fr 1fr !important;
        }

        /* About */
        .about-top {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
        .about-photo-col > div {
          max-width: 100% !important;
          aspect-ratio: 4/3 !important;
        }
        .about-bottom {
          grid-template-columns: 1fr !important;
          gap: 2.5rem !important;
        }

        /* Work */
        #work { padding: 4rem 1.25rem !important; }

        /* Footer */
        footer {
          grid-template-columns: 1fr !important;
          padding: 3rem 1.25rem !important;
        }
        footer > div:last-child {
          align-items: flex-start !important;
          border-top: 0.5px solid var(--border);
          padding-top: 2rem;
        }

        /* General */
        section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
      }

      @media (max-width: 400px) {
        .signal-strip-inner {
          grid-template-columns: 1fr !important;
        }
        .signal-strip-inner > div {
          border-right: none !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .signal-strip-inner > div + div {
          padding-top: 1.5rem !important;
          border-top: 0.5px solid var(--border) !important;
        }
      }
    `}</style>
  );
}
