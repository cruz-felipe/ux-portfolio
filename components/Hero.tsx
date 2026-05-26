"use client";
import { useEffect, useState } from "react";

type Word = { text: string; red: boolean; attach?: boolean };
const WORDS: Word[] = [
  { text: "I", red: false },
  { text: "design", red: false },
  { text: "for", red: false },
  { text: "the", red: false },
  { text: "moment", red: false },
  { text: "when", red: false },
  { text: "complexity", red: false },
  { text: "is", red: false },
  { text: "no", red: false },
  { text: "longer", red: false },
  { text: "manageable", red: false },
  { text: "and", red: false },
  { text: "someone", red: false },
  { text: "has", red: false },
  { text: "to", red: false },
  { text: "make", red: true },
  { text: "it", red: true },
  { text: "work", red: true },
  { text: ".", red: false, attach: true },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 2.5rem 5rem",
      position: "relative",
      overflow: "hidden",
    }}>





      <div style={{ paddingLeft: "2rem", position: "relative", maxWidth: "1100px" }}>
        {/* Role tag — small, precise, above headline */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "2.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
        }}>
          <span style={{ display: "inline-block", width: "20px", height: "1px", background: "var(--red)" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
            Senior Product Designer · Team Lead
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 5.5vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            color: "var(--ink)",
            margin: "0 0 3.5rem",
          }}
          aria-label="I design for the moment when complexity is no longer manageable and someone has to make it work."
        >
          {/* Non-red words */}
          {WORDS.filter(w => !w.red && !w.attach).map((word, i) => (
            <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}>
              <span style={{ display: "inline-block", transform: visible ? "translateY(0)" : "translateY(105%)", transition: `transform 0.75s cubic-bezier(0.16,1,0.3,1) ${i * 38}ms`, color: "var(--ink)" }}>
                {word.text}
              </span>
            </span>
          ))}
          {/* "make it work." — nowrap so it never breaks */}
          <span style={{ whiteSpace: "nowrap", display: "inline-block" }}>
            {WORDS.filter(w => w.red || w.attach).map((word, i) => (
              <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: word.attach ? 0 : "0.22em" }}>
                <span style={{ display: "inline-block", transform: visible ? "translateY(0)" : "translateY(105%)", transition: `transform 0.75s cubic-bezier(0.16,1,0.3,1) ${(WORDS.filter(w => !w.red && !w.attach).length + i) * 38}ms`, color: word.red ? "var(--red)" : "var(--ink)" }}>
                  {word.text}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* Sub row */}
        <div
          className="hero-sub"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s",
          }}
        >
          <p className="hero-bio">
            Eleven years designing enterprise products at global scale in BSS/OSS telecom infrastructure, B2B and B2C across 9 countries.
          </p>
          <p className="hero-bio" style={{ marginTop: "0.75rem" }}>
            I lead a local design team, run the cross-functional process and deliver the kind of system that engineers can actually build and business stakeholders can explain.
          </p>
          <div className="hero-role">
            <span className="hero-role-label">Currently</span>
            <span className="hero-role-title">
              Senior UI Designer · Team Lead, Brazil
              <br />@ Netcracker Technology
            </span>
          </div>
        </div>
      </div>

      {/* Scroll CTA */}
      <a href="#work" aria-label="Scroll to selected work" style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "2.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        opacity: visible ? 0.35 : 0,
        transition: "opacity 0.6s ease 1.6s",
        textDecoration: "none",
        color: "var(--ink)",
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Scroll
        </span>
      </a>
    </section>
  );
}
