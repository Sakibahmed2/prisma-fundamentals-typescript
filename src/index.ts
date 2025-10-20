import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Create data
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title 2!",
  //       content: "This is content......2",
  //       authorName: "Sakib Ahmed Loskor",
  //     },
  //   });

  // Get data
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
