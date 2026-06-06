import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Thato Mabena — Software Engineer";
    const subtitle = searchParams.get("subtitle") || "DISTRIBUTED SYSTEMS · AI · DATA ENGINEERING";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "#080c14",
            padding: "80px 100px",
            position: "relative",
            fontFamily: "sans-serif",
          }}
        >
          {/* Subtle Grid Background Pattern Simulation */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.08,
              display: "flex",
              flexWrap: "wrap",
              backgroundImage: "radial-gradient(#00d4aa 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Accent border left */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "10px",
              backgroundColor: "#00d4aa",
            }}
          />

          {/* Subtitle tag */}
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#00d4aa",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "24px",
              fontWeight: 600,
            }}
          >
            {`> ${subtitle}`}
          </div>

          {/* Main Title */}
          <div
            style={{
              display: "flex",
              fontSize: "64px",
              fontWeight: "bold",
              color: "#eaf4ff",
              lineHeight: 1.15,
              marginBottom: "36px",
              maxWidth: "1000px",
              wordBreak: "break-word",
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#8aabbd",
              lineHeight: 1.5,
              maxWidth: "850px",
              marginBottom: "80px",
            }}
          >
            BSc IT graduate from North-West University building concurrent distributed architectures, NLP workflows, and robust applications.
          </div>

          {/* Footer branding */}
          <div
            style={{
              position: "absolute",
              bottom: "70px",
              left: "100px",
              right: "100px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #1e2d42",
              paddingTop: "24px",
              width: "1000px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                color: "#5a7a94",
                letterSpacing: "0.05em",
              }}
            >
              portfolio.thato.dev
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#00d4aa",
                fontWeight: "bold",
              }}
            >
              thato.dev
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.error("Failed to generate OG image:", e);
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
