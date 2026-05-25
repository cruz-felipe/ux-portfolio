"use client";

interface ScreenProps {
  src: string;
  caption: string;
}

export function ScreenGallery({ screens }: { screens: ScreenProps[] }) {
  return (
    <div className="screen-gallery" style={{ display: "grid", gap: "1.5rem", alignItems: "start" }}>
      {screens.map((screen, i) => (
        <div key={i}>
          <div style={{
            background: "#1A1A1A",
            borderRadius: "32px",
            padding: "12px 12px 14px",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "64px",
              height: "6px",
              background: "#333",
              borderRadius: "3px",
              zIndex: 2,
            }}/>
            <div style={{ borderRadius: "22px", overflow: "hidden", background: "#F5F3EF" }}>
              <img src={screen.src} alt={screen.caption} style={{ width: "100%", display: "block" }}/>
            </div>
          </div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "12px",
            color: "var(--muted)", lineHeight: 1.55, marginTop: "0.75rem",
          }}>
            {screen.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
