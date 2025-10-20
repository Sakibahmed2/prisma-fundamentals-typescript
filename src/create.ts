import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Create single data into db
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title 2!",
  //       content: "This is content......2",
  //       authorName: "Sakib Ahmed Loskor",
  //     },
  //   });

  // Create multiple data into db
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 1",
        content: "Content......1",
        authorName: "Mir Hossain",
      },
      {
        title: "Title 2",
        content: "Content......2",
        authorName: "Mezba",
      },
      {
        title: "Title 3",
        content: "Content......3",
        authorName: "Mizan",
      },
    ],
  });

  console.log(createMany);
};

main();
