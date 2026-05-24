import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const post = await prisma.blogPost.findUnique({
    where: { slug: "online-diyet-nasil-calisir-gercekten-yuz-yuze-diyet-kadar-etkili-mi" }
  });
  console.log("Online Diyet Content Preview:", post?.content.substring(0, 300));
}
main().catch(console.error).finally(() => prisma.$disconnect());
