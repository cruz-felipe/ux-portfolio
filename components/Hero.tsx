"use client";
import { useEffect, useState } from "react";

type Word = { text: string; red: boolean; attach?: boolean };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Hero({ data }: { data: any }) {
  const redWords = (data.heroRedWords || "make,it,work").split(",").map((w: string) => w.trim().toLowerCase());
  const rawWords = (data.heroHeadline || "I design for the moment when complexity is no longer manageable and someone has to make it work.").split(/\s+/);
  const WORDS: Word[] = rawWords.map((word: string, i: number) => {
    const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const isPunct = word === "." || word === "," || word === "!" || word === "?";
    const isLastWord = i === rawWords.length - 1;
    const hasPunct = word.endsWith(".") || word.endsWith("!") || word.endsWith("?");
    if (hasPunct && !isPunct) {
      return { text: word.slice(0, -1), red: redWords.includes(clean), attach: false };
    }
    if (isPunct || (isLastWord && hasPunct)) {
      return { text: word, red: false, attach: true };
    }
    return { text: word, red: redWords.includes(clean), attach: false };
  });
  // ensure trailing period
  if (WORDS.length && !WORDS[WORDS.length-1].attach) {
    WORDS.push({ text: ".", red: false, attach: true });
  }
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-section" style={{
      minHeight: "92svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 2.5rem 4rem",
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
          width: "71%",
        }}
        className="hero-h1"
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
          {data.heroBio}
        </p>
        <div className="hero-role">
          <span className="hero-role-label">Currently</span>
          <span className="hero-role-title">
            Senior UI Designer · Team Lead, Brazil
            <br />@ Netcracker Technology
          </span>
        </div>
      </div>

      <a id="hero-scroll" href="#work" aria-label="Scroll to selected work" style={{
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
