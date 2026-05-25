"use client";

interface ScreenProps {
  src: string;
  caption: string;
}

export function ScreenGallery({ screens }: { screens: ScreenProps[] }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(screens.length, 3)}, 1fr)`,
      gap: "1.5rem",
      alignItems: "start",
    }} className="screen-gallery">
      {screens.map((screen, i) => (
        <div key={i}>
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "var(--paper)",
          }}>
            <img
              src={screen.src}
              alt={screen.caption}
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--muted)",
            lineHeight: 1.55,
            marginTop: "0.75rem",
          }}>
            {screen.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
