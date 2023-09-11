import { faker } from "@faker-js/faker";
import { Sequelize } from "sequelize-typescript";
import { Post } from "./models/Post.ts";
import { User } from "./models/User.ts";

const sequelize = new Sequelize({
  database: "sequelize",
  dialect: "postgres",
  username: "prisma",
  password: "prisma",
  host: "localhost",
  port: 5432,
  models: [User, Post],
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  const createUser = async () => {
    const jane = await User.create({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
    });
    return jane;
  };

  const createPost = async () => {
    const jane = await Post.create({
      title: faker.word.words(3),
      description: faker.lorem.paragraph(),
      userId: faker.number.int({ min: 5, max: 8 }),
    });
    return jane;
  };

  const user = await User.findOne({
    where: { firstname: "Rozella" },
    include: [Post],
  });

  console.log("---------------------");
  console.log(user?.dataValues.posts);
  console.log("---------------------");

  //  createUser();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
