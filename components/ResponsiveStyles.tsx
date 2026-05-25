export default function ResponsiveStyles() {
  return (
    <style>{`
      /* Tablet */
      @media (max-width: 1024px) {
        /* Signal strip: 2x2 on tablet */
      }

      /* Mobile */
      @media (max-width: 768px) {
        /* Nav */
        nav { padding: 1rem 1.25rem !important; }

        /* Hero */
        section[style*="min-height"] {
          padding: 0 1.25rem 3rem !important;
        }

        /* Sub-headline grid → stack */
        section[style*="min-height"] > div[style*="grid-template-columns: 1fr 1fr"] {
          grid-template-columns: 1fr !important;
        }

        /* Signal strip: 2x2 grid */
        .signal-strip-inner {
          grid-template-columns: 1fr 1fr !important;
          gap: 2rem 0 !important;
        }

        .signal-strip-inner > div:nth-child(2) {
          border-right: none !important;
        }

        .signal-strip-inner > div:nth-child(3),
        .signal-strip-inner > div:nth-child(4) {
          padding-top: 2rem;
          border-top: 0.5px solid var(--border);
        }

        /* About grid → stack */
        #about {
          grid-template-columns: 1fr !important;
          gap: 3rem !important;
          padding: 4rem 1.25rem !important;
        }

        /* Work section */
        #work { padding: 4rem 1.25rem !important; }

        /* Footer */
        footer {
          grid-template-columns: 1fr !important;
          padding: 3rem 1.25rem !important;
        }

        footer > div:last-child {
          align-items: flex-start !important;
        }
      }

      @media (max-width: 480px) {
        /* Signal strip: single column on very small screens */
        .signal-strip-inner {
          grid-template-columns: 1fr !important;
        }

        .signal-strip-inner > div {
          border-right: none !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          padding-top: 1.5rem !important;
          border-top: 0.5px solid var(--border) !important;
        }

        .signal-strip-inner > div:first-child {
          padding-top: 0 !important;
          border-top: none !important;
        }
      }
    `}</style>
  );
}
