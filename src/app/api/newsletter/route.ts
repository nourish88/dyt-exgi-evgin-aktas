import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  email: z.string().email(),
  name: z.string().max(100).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await prisma.newsletter.upsert({
      where: { email: data.email },
      create: { email: data.email, name: data.name, active: true },
      update: { active: true, name: data.name ?? undefined },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
    }
    return NextResponse.json({ error: "Bir hata oluştu." }, { status: 500 });
  }
}
