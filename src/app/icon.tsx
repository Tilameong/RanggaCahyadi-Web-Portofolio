import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "linear-gradient(135deg, #0f172a 0%, #090d16 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: 8,
          border: "1.5px solid #818cf8",
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #818cf8 0%, #f97316 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          RC
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
