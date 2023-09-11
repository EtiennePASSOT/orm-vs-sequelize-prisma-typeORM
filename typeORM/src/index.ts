import "reflect-metadata";
import AppDataSource from "./orm.ts";
import { createCategory } from "./services/category.service.ts";
import { createPost, selectPost } from "./services/post.service.ts";
import {
  createPhoto,
  deletePhoto,
  selectPhoto,
  updatePhoto,
} from "./services/photo.service.ts";
import { createPosts } from "./factories/post.factory.ts";

AppDataSource.initialize()
  .then(async () => {
    /* CRUD */
    //createPhoto();
    //selectPhoto(2);
    //    updatePhoto(1, "Me and my friends");
    //    deletePhoto(1);
    /********/
    /* Many To Many */
    //const category1 = await createCategory("Entre nous");
    //let category2 = await createCategory("Vente");

    //createPost("Hello World!", [category1, category2]);
    //createPosts(100);
    console.log(await selectPost(24));
  })
  .catch((error) => console.log(error));

console.log("Initialization successful!");
