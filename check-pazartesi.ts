import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const post = await prisma.blogPost.findUnique({
    where: { slug: "saglikli-beslenmeye-baslamak-i-cin-pazartesiyi-beklemeyin-mpe87qa4" }
  });
  console.log(post?.content.substring(0, 500));
}
main().catch(console.error).finally(() => prisma.$disconnect());
