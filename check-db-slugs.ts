import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const posts = await prisma.blogPost.findMany({
    select: { slug: true, title: true }
  });
  console.log(posts);
}
main().catch(console.error).finally(() => prisma.$disconnect());
