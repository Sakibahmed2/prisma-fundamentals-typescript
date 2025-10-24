import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  //Fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 3,
      },
    })
    .post();

  // find using include
  const findUsingInclude = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: true,
    },
  });

  // relational filter
  const publishedPostUser = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  //   console.log(publishedPostUser);
  console.dir(publishedPostUser, { depth: Infinity });
};

relationalQueries();
