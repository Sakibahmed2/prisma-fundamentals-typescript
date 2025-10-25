import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // Find avg of age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // Find sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // Find count
  const countAge = await prisma.user.aggregate({
    _count: {
      id: true,
    },
  });
  const countData = await prisma.user.count();

  // find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      // also _min work
      age: true,
    },
  });

  console.log(maxAge);
};

aggregates();
