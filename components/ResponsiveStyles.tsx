export default function ResponsiveStyles() {
  return (
    <style>{`
      /* ── Hero sub ── */
      .hero-section {
        padding: 0 2.5rem 4rem;
      }
      .hero-h1 {
        width: 71%;
      }
      .hero-bio {
        font-family: var(--font-body);
        font-size: clamp(0.9rem, 1.15vw, 1rem);
        font-weight: 300;
        line-height: 1.72;
        color: var(--ink);
        opacity: 0.78;
        margin: 0;
        max-width: 540px;
      }
      .hero-sub {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        max-width: 1100px;
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
      .experience-period {
        white-space: nowrap;
      }

      /* ── Nav ── */
      .nav-hamburger { display: none !important; }
      .nav-desktop { display: flex !important; }

      /* ── Work grids ── */
      .work-grid-primary {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .work-grid-secondary {
        grid-template-columns: repeat(2, 1fr) !important;
      }

      /* ── Artifact SVGs — always scale to container ── */
      .artifact-section svg {
        width: 100% !important;
        height: auto !important;
        max-width: 100% !important;
        overflow: visible;
      }

      /* ── Tablet 1024px ── */
      @media (max-width: 1024px) {
        .about-top {
          grid-template-columns: 200px 1fr;
          gap: 2.5rem;
        }
      }

      /* ── Tablet 900px ── */
      @media (max-width: 900px) {
        .about-bottom {
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .work-grid-primary {
          grid-template-columns: 1fr 1fr !important;
          gap: 0.75rem !important;
        }
        .work-grid-secondary {
          grid-template-columns: 1fr 1fr !important;
          gap: 0.75rem !important;
        }
        #work { padding: 3.5rem 1.5rem !important; }

        .case-callout { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        .case-metrics { grid-template-columns: 1fr 1fr !important; }
        .case-context { grid-template-columns: 1fr !important; }
        .case-section { grid-template-columns: 1fr !important; gap: 1.5rem !important; }

        .screen-gallery { grid-template-columns: repeat(2, 1fr) !important; }
        .screen-gallery.count-1 { grid-template-columns: 1fr !important; max-width: 100%; }
        .screen-gallery.narrow { grid-template-columns: repeat(2, 260px) !important; }
        .screen-gallery.narrow.count-1 { grid-template-columns: 260px !important; }
      }

      /* ── Mobile 680px ── */
      @media (max-width: 680px) {
        /* Nav */
        .nav-hamburger { display: block !important; }
        .nav-desktop { display: none !important; }
        nav { padding: 1rem 1.25rem !important; }

        /* Hero */
        .hero-section { padding: 0 1.25rem 3rem !important; }
        .hero-h1 { width: 100% !important; }
        .hero-bio { max-width: 100% !important; }
        .hero-sub {
          grid-template-columns: 1fr !important;
          gap: 1.5rem !important;
          max-width: 100% !important;
        }
        .hero-role {
          border-left: 2px solid var(--red);
          padding-left: 1rem !important;
        }
        #hero-scroll { display: none !important; }

        /* Work */
        #work { padding: 3rem 1.25rem !important; }
        .work-grid-primary { grid-template-columns: 1fr !important; }
        .work-grid-secondary { grid-template-columns: 1fr !important; }
        .featured-card-link {
          grid-template-columns: 1fr !important;
          min-height: auto !important;
        }
        .featured-card-link > div:last-child {
          display: none !important;
        }
        .featured-card-content {
          padding: 2rem 1.5rem !important;
        }

        /* About */
        #about { padding: 3rem 1.25rem !important; }
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
        .experience-period {
          white-space: normal !important;
          font-size: 11px !important;
          opacity: 0.7;
        }

        /* Case studies */
        .case-hero-inner { padding: 5rem 1.25rem 2.5rem !important; }
        .case-callout { padding: 2rem 1.25rem !important; grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        .case-metrics { grid-template-columns: 1fr !important; }
        .case-context { grid-template-columns: 1fr !important; }
        .case-section { padding: 2rem 1.25rem !important; gap: 1rem !important; }
        .case-section > h2 { font-size: 10px !important; }

        .screen-gallery, .screen-gallery.count-2 {
          grid-template-columns: 1fr !important;
        }
        .screen-gallery.narrow {
          grid-template-columns: repeat(2, 1fr) !important;
          justify-content: stretch !important;
        }

        .artifact-caption { flex-direction: column !important; gap: 0.5rem !important; }
        .artifact-caption p:last-child { text-align: left !important; max-width: 100% !important; }

        section[aria-label="More work"] { grid-template-columns: 1fr !important; gap: 1rem !important; }

        /* Footer */
        .footer-top { padding: 3.5rem 1.25rem 2.5rem !important; }
        .footer-bottom {
          padding: 1.25rem !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 0.75rem !important;
        }
        .footer-cta-divider { display: none !important; }
        footer { overflow: hidden; }
      }

      /* ── Mobile 480px ── */
      @media (max-width: 480px) {
        .work-grid-primary, .work-grid-secondary {
          grid-template-columns: 1fr !important;
          gap: 0.5rem !important;
        }
        .screen-gallery.narrow {
          grid-template-columns: 1fr !important;
        }
      }

      /* Case study layout — desktop defaults */
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

      /* Screen gallery — desktop defaults */
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
      .screen-gallery.narrow {
        grid-template-columns: repeat(3, 320px) !important;
        justify-content: center;
      }
      .screen-gallery.narrow.count-2 {
        grid-template-columns: repeat(2, 320px) !important;
        justify-content: center;
      }
      .screen-gallery.narrow.count-1 {
        grid-template-columns: 320px !important;
        justify-content: center;
      }

      /* Footer logo */
      [data-theme="light"] .footer-logo-dark,
      :root:not([data-theme]) .footer-logo-dark { display: none !important; }
    `}</style>
  );
}
