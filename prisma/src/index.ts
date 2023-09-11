import { PrismaClient, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const createUser = async () => {
  return await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.person.fullName(),
    },
  });
};

const selectUser = async (id: number) => {
  console.log("selecting user");
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

const createPost = async (userId: number) => {
  return await prisma.post.create({
    data: {
      title: faker.lorem.words(3),
      published: true,
      author: {
        connect: { id: userId },
      },
      views: faker.number.int({ min: 0, max: 1000 }),
      likes: faker.number.int({ min: 0, max: 1000 }),
      categories: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
};

const selectPost = async (id: number) => {
  console.log("selecting post");
  return await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });
};

const createCategory = async () => {
  console.log("creating categories");
  return await prisma.category.create({
    data: {
      name: faker.lorem.words(1),
    },
  });
};

const selectCategory = async (id: number) => {
  console.log("selecting categories");
  return await prisma.category.findUnique({
    where: {
      id,
    },
  });
};

//createPost(1);
console.log(await selectPost(1));
