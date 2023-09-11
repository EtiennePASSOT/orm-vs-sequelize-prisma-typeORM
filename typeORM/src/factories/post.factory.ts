import { faker } from "@faker-js/faker";
import { Post } from "../models/Post.ts";
import { selectCategory } from "../services/category.service.ts";
import AppDataSource from "../orm.ts";
import { createPhoto } from "../services/photo.service.ts";

const postRepository = AppDataSource.getRepository(Post);

export const createPost = async () => {
  const newPost = new Post();

  newPost.name = faker.lorem.text();
  newPost.categories = [];
  newPost.photos = [];

  for (let i = 0; i < faker.number.int({ min: 0, max: 3 }); i++) {
    const post = await selectCategory(faker.number.int({ min: 3, max: 9 }));

    if (post) newPost.categories.push(post);
  }

  for (let i = 0; i < faker.number.int({ min: 0, max: 3 }); i++) {
    const post = await createPhoto();

    if (post) newPost.photos.push(post);
  }

  await postRepository.save(newPost);

  return newPost;
};

export const createPosts = async (count: number) => {
  for (let i = 0; i < count; i++) {
    await createPost();
  }
};
