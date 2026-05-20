import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Diyetisyen Ezgi Evgin Aktaş — Online Beslenme Danışmanlığı Ankara";
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
            "linear-gradient(135deg, #fdf2f8 0%, #ecfeff 55%, #f0fdf4 100%)",
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
            ezgievginaktas.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 32,
              color: "#ec4899",
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Diyetisyen
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#0f172a",
              letterSpacing: -1,
            }}
          >
            Ezgi Evgin Aktaş
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#334155",
              lineHeight: 1.3,
              maxWidth: 980,
            }}
          >
            Ankara · Eryaman · Online beslenme danışmanlığı ve kişiye özel diyet programları
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#475569",
          }}
        >
          <div style={{ display: "flex", gap: 36 }}>
            <span>BMI hesaplayıcı</span>
            <span>·</span>
            <span>Sağlıklı tarifler</span>
            <span>·</span>
            <span>Mobil takip</span>
          </div>
          <div
            style={{
              padding: "12px 24px",
              borderRadius: 999,
              background: "linear-gradient(90deg,#ec4899,#06b6d4)",
              color: "white",
              fontWeight: 600,
            }}
          >
            Randevu Al
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
