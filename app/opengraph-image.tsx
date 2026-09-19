import { ImageResponse } from "next/og";
export const alt =
  "The Hangout Diner — Come hungry. Stay awhile. Family-owned in Perry, Iowa.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#f7f1e7",
        color: "#4d285b",
        padding: "65px 80px",
        borderBottom: "22px solid #4d285b",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 5 }}>
        THE HANGOUT DINER · PERRY, IOWA
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 100,
          fontWeight: 700,
          lineHeight: 1.05,
        }}
      >
        <span>Come hungry.</span>
        <span>Stay awhile.</span>
      </div>
      <div style={{ display: "flex", fontSize: 28 }}>
        1014 2nd St, Perry, IA · (515) 979-3385
      </div>
    </div>,
    size,
  );
}
