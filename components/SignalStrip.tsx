"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "1M+", label: "End users across B2C telecom products" },
  { value: "9", label: "Countries. US, UK, Brazil, Denmark, Japan and 4 more.", countTo: 9 },
  { value: "32→1", label: "Legacy tools collapsed into a single workspace" },
  { value: "11yr", label: "Building enterprise products, from web to BSS/OSS", countTo: 11 },
];

function CountUp({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return <span ref={ref}>{count}</span>;
}

function StatValue({ value, countTo }: { value: string; countTo?: number }) {
  const style: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2rem, 3.5vw, 3rem)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "var(--ink)",
    marginBottom: "0.5rem",
  };

  if (value === "9" && countTo) {
    return <div style={style}><CountUp target={countTo} /></div>;
  }
  if (value === "11yr" && countTo) {
    return <div style={style}><CountUp target={countTo} /><span style={{ color: "var(--red)" }}>yr</span></div>;
  }
  if (value === "1M+") {
    return <div style={style}>1<span style={{ color: "var(--red)" }}>M+</span></div>;
  }
  if (value === "32→1") {
    return <div style={style}>32<span style={{ color: "var(--red)" }}>→1</span></div>;
  }
  return <div style={style}>{value}</div>;
}

export default function SignalStrip() {
  return (
    <section style={{
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding: "2.5rem 2.5rem",
    }}>
      <div
        className="signal-strip-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "0 2rem",
              borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
              paddingLeft: i === 0 ? 0 : undefined,
              paddingRight: i === STATS.length - 1 ? 0 : undefined,
            }}
          >
            <StatValue value={stat.value} countTo={stat.countTo} />
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--muted)",
              lineHeight: 1.55,
              margin: 0,
              maxWidth: "140px",
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
