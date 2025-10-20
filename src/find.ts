import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Find all from db
  const findAll = await prisma.post.findMany();

  // Find first and find first or throw
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      id: 1,
    },
  });

  // Find unique
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 10,
    },
  });

  console.log(findUnique);
};

main();
