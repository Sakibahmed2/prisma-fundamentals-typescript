import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletes = async () => {
  // Delete single data
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 2,
  //     },
  //   });

  // Delete multiple data
  const deleteMany = await prisma.post.deleteMany({});

  console.log(deleteMany);
};

deletes();
