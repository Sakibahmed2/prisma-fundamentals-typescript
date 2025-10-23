import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // Offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 3,
    take: 4,
  });

  // Cursor pagination
  const cursorData = await prisma.post.findMany({
    take: 5,
    cursor: {
      id: 5,
    },
  });

  //   console.log("Cursor Paginated data: ", cursorData);

  // Sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
  });

  console.log(sortedData);
};

paginationSorting();
