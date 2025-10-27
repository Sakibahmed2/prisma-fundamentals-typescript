import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const email = "user1@gmail.com";
  const posts =
    await prisma.$queryRaw`SELECT * FROM "users" WHERE email=${email}`;
  console.log(posts);
};

rawQuery();
