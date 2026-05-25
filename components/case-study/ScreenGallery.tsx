"use client";
import { useState } from "react";

interface ScreenProps {
  src: string;
  caption: string;
}

export function ScreenGallery({ screens }: { screens: ScreenProps[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="screen-gallery" style={{
        display: "grid",
        gap: "2rem",
        alignItems: "start",
        justifyContent: "center",
      }}>
        {screens.map((screen, i) => (
          <div key={i}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "zoom-in" }}
            onClick={() => setLightbox(i)}
          >
            <div style={{ width: "100%", background: "var(--border)", borderRadius: "12px", overflow: "hidden" }}>
              <img
                src={screen.src}
                alt={screen.caption}
                style={{ width: "100%", display: "block" }}
                loading="lazy"
              />
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "12px",
              color: "var(--muted)", lineHeight: 1.55,
              marginTop: "0.75rem", textAlign: "center",
            }}>
              {screen.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(10,10,10,0.92)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "2rem", cursor: "zoom-out",
          }}
        >
          <img
            src={screens[lightbox].src}
            alt={screens[lightbox].caption}
            style={{
              maxHeight: "80vh", maxWidth: "420px",
              width: "100%", borderRadius: "16px",
              display: "block",
            }}
          />
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "13px",
            color: "rgba(255,255,255,0.5)", marginTop: "1.25rem",
            textAlign: "center", maxWidth: "380px",
          }}>
            {screens[lightbox].caption}
          </p>
          <div style={{
            display: "flex", gap: "1rem", marginTop: "1.5rem",
          }}>
            {screens.map((_, i) => (
              <button key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                style={{
                  width: i === lightbox ? "24px" : "6px", height: "6px",
                  borderRadius: "3px", border: "none", cursor: "pointer",
                  background: i === lightbox ? "var(--red)" : "rgba(255,255,255,0.25)",
                  transition: "all 0.2s", padding: 0,
                }}
              />
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "1.5rem" }}>
            Click anywhere to close
          </p>
        </div>
      )}
    </>
  );
}
