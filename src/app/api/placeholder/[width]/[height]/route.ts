import type { NextRequest } from "next/server";

export const runtime = "edge";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;
const DEFAULT_TEXT = "Placeholder";
const DEFAULT_BG = "E91E8C";
const DEFAULT_COLOR = "FFFFFF";
const MAX_SIZE = 2000;

function parseDimension(value: string | undefined, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  return Math.min(parsed, MAX_SIZE);
}

function sanitizeHexColor(value: string | null, fallback: string) {
  const sanitized = (value ?? "").trim().replace(/^#/, "");
  return /^[0-9A-Fa-f]{6}$/.test(sanitized) ? sanitized : fallback;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ width: string; height: string }> }
) {
  const { width: widthParam, height: heightParam } = await context.params;
  const searchParams = request.nextUrl.searchParams;

  const width = parseDimension(widthParam, DEFAULT_WIDTH);
  const height = parseDimension(heightParam, DEFAULT_HEIGHT);
  const text = (searchParams.get("text") ?? DEFAULT_TEXT).slice(0, 24);
  const bg = sanitizeHexColor(searchParams.get("bg"), DEFAULT_BG);
  const color = sanitizeHexColor(searchParams.get("color"), DEFAULT_COLOR);

  const escapedText = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const fontSize = Math.max(36, Math.floor(Math.min(width, height) * 0.18));
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#${bg}" />
  <text
    x="50%"
    y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    fill="#${color}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="${fontSize}"
    font-weight="700"
    letter-spacing="0.05em"
  >
    ${escapedText}
  </text>
</svg>`.trim();

  return new Response(svg, {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
}
