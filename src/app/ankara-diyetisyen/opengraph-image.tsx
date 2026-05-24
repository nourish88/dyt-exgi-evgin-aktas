import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ankara Diyetisyen — Beslenme & Diyet Danışmanlığı · Ezgi Evgin Beslenme ve Diyet Danışmanlığı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #fdf2f8 0%, #f5f3ff 55%, #ecfeff 100%)",
          fontFamily: "sans-serif",
          color: "#1f2937",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "linear-gradient(135deg,#ec4899,#06b6d4)",
            }}
          />
          <div style={{ fontSize: 28, color: "#475569", letterSpacing: 0.5 }}>
            ezgievginaktas.com / ankara-diyetisyen
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 32,
              color: "#ec4899",
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Beslenme & Diyet Danışmanlığı
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.04,
              color: "#0f172a",
              letterSpacing: -1.5,
            }}
          >
            Ankara Diyetisyen
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#334155",
              lineHeight: 1.3,
              maxWidth: 1000,
            }}
          >
            Eryaman ofisinde yüz yüze veya Türkiye genelinde online danışmanlık
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#475569",
          }}
        >
          <div style={{ display: "flex", gap: 36 }}>
            <span>Haftalık görüşme</span>
            <span>·</span>
            <span>Danışan portalı</span>
            <span>·</span>
            <span>Yasaksız plan</span>
          </div>
          <div
            style={{
              padding: "14px 28px",
              borderRadius: 999,
              background: "linear-gradient(90deg,#ec4899,#06b6d4)",
              color: "white",
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Ezgi Evgin Beslenme ve Diyet Danışmanlığı
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
