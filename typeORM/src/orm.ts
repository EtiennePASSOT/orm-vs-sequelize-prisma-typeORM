import { DataSource } from "typeorm";
import { Photo } from "./models/Photo.ts";
import { Post } from "./models/Post.ts";
import { Category } from "./models/Category.ts";
import { Survey } from "./models/Survey.ts";

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "typeORM",
  database: "testORM",
  password: "typeORM",
  entities: [Photo, Post, Category, Survey],
  //synchronize: true,
  migrations: ["src/migrations/*.ts"],
  logging: false,
});
