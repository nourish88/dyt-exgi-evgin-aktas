import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Online Diyet Ankara — Uzaktan Beslenme Danışmanlığı · Ezgi Evgin Beslenme ve Diyet Danışmanlığı";
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
            "linear-gradient(135deg, #ecfeff 0%, #f0fdf4 55%, #fdf2f8 100%)",
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
              background: "linear-gradient(135deg,#06b6d4,#ec4899)",
            }}
          />
          <div style={{ fontSize: 28, color: "#475569", letterSpacing: 0.5 }}>
            ezgievginaktas.com / online-diyet-ankara
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 32,
              color: "#06b6d4",
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Türkiye Geneli · Uzaktan
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
            Online Diyet Ankara
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#334155",
              lineHeight: 1.3,
              maxWidth: 1000,
            }}
          >
            Haftalık görüntülü görüşme + danışan portalı ile sürdürülebilir takip
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
            <span>Mobil uygulama</span>
            <span>·</span>
            <span>Anlık destek</span>
            <span>·</span>
            <span>Kişiye özel plan</span>
          </div>
          <div
            style={{
              padding: "14px 28px",
              borderRadius: 999,
              background: "linear-gradient(90deg,#06b6d4,#ec4899)",
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
