import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Максим — разработчик, архитектор систем, AI-специалист";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F6F3EE",
          color: "#2B2622",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8A8072",
          }}
        >
          Максим
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          Разработчик, архитектор систем, AI.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            width: 96,
            height: 8,
            borderRadius: 999,
            background: "#B5502C",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
