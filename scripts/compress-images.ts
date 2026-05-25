import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const SIZE_THRESHOLD = 500 * 1024;
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 78;

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      return [full];
    })
  );
  return files.flat();
}

async function main() {
  const files = await walk(PUBLIC_DIR);
  const targets = files.filter((f) => /\.(jpe?g|png)$/i.test(f));
  let totalSaved = 0;

  for (const file of targets) {
    const stat = await fs.stat(file);
    if (stat.size < SIZE_THRESHOLD) continue;

    const buf = await fs.readFile(file);
    const meta = await sharp(buf).metadata();
    const targetWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;

    const isPng = /\.png$/i.test(file);
    const pipeline = sharp(buf).rotate();
    if (targetWidth && targetWidth !== meta.width) {
      pipeline.resize({ width: targetWidth });
    }

    const out = isPng
      ? await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true }).toBuffer();

    if (out.length < stat.size) {
      await fs.writeFile(file, out);
      const saved = stat.size - out.length;
      totalSaved += saved;
      console.log(
        `${path.relative(PUBLIC_DIR, file)}: ${(stat.size / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB (-${(saved / 1024).toFixed(0)}KB)`
      );
    } else {
      console.log(`${path.relative(PUBLIC_DIR, file)}: kept original (re-encode larger)`);
    }
  }

  console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
