import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

function getSafeFileName(fileName: string, fileType: string) {
  const extensionFromName = fileName.split(".").pop()?.toLowerCase();
  const extensionFromType = fileType.split("/").pop()?.replace("jpeg", "jpg");
  const extension = extensionFromName?.match(/^(jpg|jpeg|png|webp|gif)$/)
    ? extensionFromName.replace("jpeg", "jpg")
    : extensionFromType ?? "jpg";

  const baseName =
    fileName
      .replace(/\.[^/.]+$/, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "image";

  return `${baseName}.${extension}`;
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(
        { error: "Görsel yükleme ayarı eksik: BLOB_READ_WRITE_TOKEN tanımlı değil." },
        { status: 500 }
      );
    }

    const form = await req.formData();
    const file = form.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });
    }

    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: "Sadece JPEG, PNG, WEBP veya GIF yükleyebilirsiniz" }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Dosya 5MB'dan büyük olamaz" }, { status: 400 });
    }

    const safeFileName = getSafeFileName(file.name, file.type);
    const blob = await put(`uploads/${Date.now()}-${safeFileName}`, file, {
      access: "public",
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Image upload failed:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Görsel yüklenirken beklenmeyen bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}
