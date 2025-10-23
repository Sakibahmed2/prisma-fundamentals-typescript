import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Find all from db
  const findAll = await prisma.post.findMany({
    select: {
      title: true,
      authorName: true,
    },
  });

  console.log(findAll);

  // Find first and find first or throw
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // Find unique and unique or throw
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 6,
    },
    select: {
      title: true,
      content: true,
    },
  });
};

main();
