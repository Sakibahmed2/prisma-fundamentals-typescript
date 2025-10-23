import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  // Update single data
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: {
  //       title: "AI Trends",
  //       content: "AI is changing how we code and build apps.",
  //     },
  //   });

  // Update many
  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     title: "Title 2",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });

  // Upsert data
  const upsertData = await prisma.post.upsert({
    where: {
      id: 3,
    },
    update: {
      title: "Title 1",
    },
    create: {
      title: "Title 1",
      content: "Content 1",
    },
  });

  console.log(upsertData);
};

updates();
