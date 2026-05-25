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
      gap: "2rem",
      alignItems: "start",
    }} className="screen-gallery">
      {screens.map((screen, i) => (
        <div key={i}>
          {/* Device frame */}
          <div style={{
            background: "#1A1A1A",
            borderRadius: "28px",
            padding: "10px 10px 12px",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset",
            position: "relative",
          }}>
            {/* Notch */}
            <div style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "72px",
              height: "6px",
              background: "#111",
              borderRadius: "3px",
              zIndex: 2,
            }}/>
            {/* Screen */}
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              background: "#F5F3EF",
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
          </div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--muted)",
            lineHeight: 1.55,
            marginTop: "0.875rem",
          }}>
            {screen.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
