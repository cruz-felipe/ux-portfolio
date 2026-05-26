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

      @media (max-width: 680px) {
        .about-top {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
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
        #work { padding: 4rem 1.5rem !important; }
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

        /* Section padding tightened on mobile */
        #work { padding: 4rem 1.25rem !important; }
        .case-hero-inner { padding: 6rem 1.25rem 3rem !important; }
        .case-section { padding: 2.5rem 1.25rem !important; gap: 1rem !important; }
        .case-section > h2 { font-size: 10px !important; }
        footer { padding: 3rem 1.25rem !important; }
        .case-callout { padding: 2.5rem 1.25rem !important; }

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

      @media (max-width: 480px) {
        .work-grid {
          grid-template-columns: 1fr !important;
          gap: 0.5rem !important;
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

      /* Case study layout */
      .case-callout {
        grid-template-columns: 1fr 1fr !important;
      }
      .artifact-caption {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 2rem;
      }
      .case-metrics {
        grid-template-columns: repeat(3, 1fr) !important;
      }
      .case-context {
        grid-template-columns: 1fr 1fr !important;
      }
      .case-section {
        grid-template-columns: 200px 1fr !important;
      }

      @media (max-width: 900px) {
        .case-callout { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        .case-metrics { grid-template-columns: 1fr 1fr !important; }
        .case-context { grid-template-columns: 1fr !important; }
        .case-section { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
      }

      @media (max-width: 680px) {
        .case-metrics { grid-template-columns: 1fr !important; }
        .artifact-caption { flex-direction: column !important; gap: 0.5rem !important; }
        .artifact-caption p:last-child { text-align: left !important; max-width: 100% !important; }
      }

      /* Screen gallery */
      /* Default — desktop/tablet screens (B2B, Hub, Quota, Dane) */
      .screen-gallery {
        grid-template-columns: repeat(3, 1fr) !important;
        width: 100%;
      }
      .screen-gallery.count-2 {
        grid-template-columns: repeat(2, 1fr) !important;
        width: 100%;
      }
      .screen-gallery.count-1 {
        grid-template-columns: 1fr !important;
        max-width: 760px;
        margin: 0 auto;
      }
      /* Narrow — phone screenshots (Vocabulary) */
      .screen-gallery.narrow {
        grid-template-columns: repeat(3, 220px) !important;
        justify-content: center;
      }
      .screen-gallery.narrow.count-2 {
        grid-template-columns: repeat(2, 220px) !important;
        justify-content: center;
      }
      .screen-gallery.narrow.count-1 {
        grid-template-columns: 220px !important;
        justify-content: center;
      }
      @media (max-width: 900px) {
        .screen-gallery { grid-template-columns: repeat(2, 1fr) !important; }
        .screen-gallery.count-1 { grid-template-columns: 1fr !important; max-width: 100%; }
        .screen-gallery.narrow { grid-template-columns: repeat(2, 180px) !important; }
        .screen-gallery.narrow.count-1 { grid-template-columns: 180px !important; }
      }
      @media (max-width: 680px) {
        .screen-gallery { grid-template-columns: 1fr !important; max-width: 100% !important; }
        .screen-gallery.narrow { grid-template-columns: repeat(2, 140px) !important; }
      }

      /* Footer logo dark mode swap */
      [data-theme="light"] .footer-logo-dark,
      :root:not([data-theme]) .footer-logo-dark { display: none !important; }
      [data-theme="dark"] .footer-logo-light { display: none !important; }
      [data-theme="dark"] .footer-logo-dark { display: block !important; }
    `}</style>
  );
}
