import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#1c1712",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#c2410c",
              color: "#fffaf6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            G
          </div>
          <div style={{ fontSize: 36, letterSpacing: -1 }}>Guidevale</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, lineHeight: 1.02, letterSpacing: -2, maxWidth: 900 }}>
            Products worth opening.
          </div>
          <div style={{ fontSize: 28, color: "#5c5348" }}>
            Today&apos;s price stays on Amazon.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
