import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: "60px",
            height: "6px",
            backgroundColor: "#4f46e5",
            borderRadius: "3px",
            marginBottom: "40px",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#18181b",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Vibe Course
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            color: "#71717a",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          Apprends à builder avec l'IA — sans savoir coder.
        </div>

        {/* Bottom tag */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "#eef2ff",
              color: "#4f46e5",
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            7 modules · 7 exercices
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
