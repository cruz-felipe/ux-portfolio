"use client";
import { useEffect, useState } from "react";

const HEADLINE = "I design for the moment when complexity is no longer manageable and someone has to make it work.";
const WORDS = HEADLINE.split(" ");

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
      justifyContent: "center",
      padding: "8rem 2.5rem 5rem",
      position: "relative",
    }}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem, 4.2vw, 4.2rem)",
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          color: "var(--ink)",
          maxWidth: "900px",
          margin: "0 0 4rem",
        }}
        aria-label={HEADLINE}
      >
        {WORDS.map((word, i) => (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.26em" }}>
            <span style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 42}ms, opacity 0.4s ease ${i * 42}ms`,
            }}>
              {word === "manageable" ? <span style={{ color: "var(--red)" }}>{word}</span> : word}
            </span>
          </span>
        ))}
      </h1>

      {/* Sub copy — stacked, not grid */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.7s ease 0.85s, transform 0.7s ease 0.85s",
        maxWidth: "520px",
      }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
          fontWeight: 300,
          lineHeight: 1.72,
          color: "var(--ink)",
          opacity: 0.82,
          margin: "0 0 2.5rem",
        }}>
          Eleven years designing enterprise products at global scale in BSS/OSS telecom
          infrastructure, B2B and B2C across 9 countries. I lead local design team, run
          the cross-functional process and deliver the kind of system that engineers can
          actually build and business stakeholders can explain.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}>
            Currently
          </span>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--ink)",
            lineHeight: 1.5,
          }}>
            Senior UI Designer · Team Lead, Brazil
            <br />@ Netcracker Technology
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "2.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        opacity: visible ? 0.35 : 0,
        transition: "opacity 0.6s ease 1.5s",
      }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
