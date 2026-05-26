"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "1M+", label: "End users across B2C telecom products" },
  { value: "9", label: "Countries", countTo: 9 },
  { value: "32→1", label: "Legacy tools into one workspace" },
  { value: "11yr", label: "Building enterprise products", countTo: 11 },
];

function CountUp({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function SignalStrip() {
  return (
    <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
      <div className="signal-strip-inner" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {STATS.map((stat, i) => (
          <div key={i} style={{
            padding: "2rem 2rem",
            borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
            paddingLeft: i === 0 ? "2.5rem" : undefined,
            paddingRight: i === STATS.length - 1 ? "2.5rem" : undefined,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Hover accent bar */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "var(--red)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s ease" }}
              className="stat-bar" />

            {/* Oversized value */}
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--ink)", marginBottom: "0.6rem" }}>
              {stat.value === "9" && stat.countTo ? <><CountUp target={stat.countTo} /></> :
               stat.value === "11yr" && stat.countTo ? <><CountUp target={stat.countTo} /><span style={{ color: "var(--red)" }}>yr</span></> :
               stat.value === "1M+" ? <>1<span style={{ color: "var(--red)" }}>M+</span></> :
               stat.value === "32→1" ? <>32<span style={{ color: "var(--red)" }}>→1</span></> :
               stat.value}
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 400, color: "var(--muted)", lineHeight: 1.5, margin: 0, maxWidth: "130px", letterSpacing: "0.01em" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <style>{`.signal-strip-inner > div:hover .stat-bar { transform: scaleX(1) !important; }`}</style>
    </section>
  );
}
