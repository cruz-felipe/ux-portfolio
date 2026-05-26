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
    const t = setTimeout(() => setVisible(true), 100);
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
    }}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.6rem, 5.5vw, 6rem)",
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          color: "var(--ink)",
          margin: "0 0 3.5rem",
        }}
        aria-label="I design for the moment when complexity is no longer manageable and someone has to make it work."
      >
        {WORDS.map((word, i) => {
          const next = WORDS[i + 1];
          const noGap = next?.attach || word.attach;
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                overflow: "visible",
                verticalAlign: "bottom",
                marginRight: noGap ? 0 : "0.26em",
              }}
            >
              <span style={{
                display: "inline-block",
                transform: visible ? "translateY(0)" : "translateY(110%)",
                opacity: visible ? 1 : 0,
                transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 42}ms, opacity 0.4s ease ${i * 42}ms`,
                color: word.red ? "var(--red)" : "var(--ink)",
              }}>
                {word.text}
              </span>
            </span>
          );
        })}
      </h1>

      <div
        className="hero-sub"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.85s, transform 0.7s ease 0.85s",
        }}
      >
        <p className="hero-bio">
          Eleven years designing enterprise products at global scale in BSS/OSS telecom
          infrastructure, B2B and B2C across 9 countries. I lead local design team, run
          the cross-functional process and deliver the kind of system that engineers can
          actually build and business stakeholders can explain.
        </p>
        <div className="hero-role">
          <span className="hero-role-label">Currently</span>
          <span className="hero-role-title">
            Senior UI Designer · Team Lead, Brazil
            <br />@ Netcracker Technology
          </span>
        </div>
      </div>

      <a href="#work" aria-label="Scroll to selected work" style={{
        position: "absolute",
        bottom: "2rem",
        left: "2.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        opacity: visible ? 0.35 : 0,
        transition: "opacity 0.6s ease 1.5s",
        textDecoration: "none",
        color: "var(--ink)",
      }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Scroll
        </span>
      </a>
    </section>
  );
}
