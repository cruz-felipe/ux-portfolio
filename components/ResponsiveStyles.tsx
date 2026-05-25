export default function ResponsiveStyles() {
  return (
    <style>{`
      /* ── Hero sub ── */
      .hero-sub {
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 3rem;
        max-width: 900px;
      }
      .hero-bio {
        font-family: var(--font-body);
        font-size: clamp(0.95rem, 1.2vw, 1.05rem);
        font-weight: 300;
        line-height: 1.72;
        color: var(--ink);
        opacity: 0.82;
        margin: 0;
      }
      .hero-role {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        padding-top: 0.1rem;
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

      /* ── About ── */
      .about-top {
        display: grid;
        grid-template-columns: 240px 1fr;
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

      /* ── Work grid ── */
      .work-grid {
        grid-template-columns: repeat(3, 1fr) !important;
      }

      /* ── Tablet ── */
      @media (max-width: 1024px) {
        .about-top {
          grid-template-columns: 200px 1fr;
          gap: 2.5rem;
        }
      }

      @media (max-width: 900px) {
        .about-bottom {
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .work-grid {
          grid-template-columns: 1fr 1fr !important;
          gap: 0.75rem !important;
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
          border-top: 1px solid rgba(10,10,10,0.12) !important;
        }
      }

      /* ── Mobile ── */
      @media (max-width: 680px) {
        .nav-hamburger { display: block !important; }
        .nav-desktop { display: none !important; }
        nav { padding: 1rem 1.25rem !important; }

        .hero-sub {
          grid-template-columns: 1fr !important;
          gap: 1.5rem !important;
          max-width: 100% !important;
        }
        .hero-role {
          border-left: 2px solid var(--red);
          padding-left: 1rem !important;
        }

        .work-grid {
          grid-template-columns: 1fr !important;
          gap: 0.75rem !important;
        }

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

        #work { padding: 4rem 1.25rem !important; }
        #about { padding: 4rem 1.25rem !important; }

        footer {
          grid-template-columns: 1fr !important;
          padding: 3rem 1.25rem !important;
        }
        footer > div:last-child {
          align-items: flex-start !important;
          border-top: 1px solid rgba(10,10,10,0.1);
          padding-top: 2rem;
        }
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
          border-top: 1px solid rgba(10,10,10,0.12) !important;
        }
      }

      /* Footer logo invert in dark mode */
      [data-theme="dark"] .footer-logo {
        filter: invert(1) brightness(2);
      }
    `}</style>
  );
}
