"use client";
import { useEffect, useRef, useState } from "react";

const HEADLINE = "I design for the moment when complexity is no longer manageable and someone has to make it work.";
const WORDS = HEADLINE.split(" ");

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 2.5rem 4rem",
        paddingTop: "7rem",
        position: "relative",
      }}
    >
      {/* Top-right label */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2.5rem",
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 1.2s",
        }}
      >
        Senior Product Designer
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "var(--ink)",
          maxWidth: "1100px",
          margin: "0 0 2.5rem",
        }}
        aria-label={HEADLINE}
      >
        {WORDS.map((word, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              marginRight: "0.28em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                transform: visible ? "translateY(0)" : "translateY(110%)",
                opacity: visible ? 1 : 0,
                transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 45}ms, opacity 0.4s ease ${i * 45}ms`,
              }}
            >
              {word === "manageable" ? (
                <span style={{ color: "var(--red)" }}>{word}</span>
              ) : (
                word
              )}
            </span>
          </span>
        ))}
      </h1>

      {/* Sub-headline + role */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          maxWidth: "900px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "var(--ink)",
            margin: 0,
            opacity: 0.85,
          }}
        >
          Eleven years designing enterprise products at global scale — BSS/OSS,
          telecom infrastructure, B2B and B2C across 9 countries. I lead design
          teams, run the cross-functional process, and deliver the kind of system
          that engineers can actually build and business stakeholders can actually
          explain.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Currently
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.5,
            }}
          >
            Senior UI Designer · Team Lead, Brazil
            <br />
            Senior Product IC · Global Projects
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          opacity: visible ? 0.4 : 0,
          transition: "opacity 0.6s ease 1.5s",
        }}
      >
        <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
