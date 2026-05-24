import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const posts = await prisma.blogPost.findMany({
    select: { id: true, slug: true, title: true, excerpt: true }
  });
  console.log(JSON.stringify(posts, null, 2));
}
main().catch(console.error).finally(() => prisma.$disconnect());
