import { Category } from "../models/Category.ts";
import { Post } from "../models/Post.ts";
import AppDataSource from "../orm.ts";

const postRepository = AppDataSource.getRepository(Post);

export const createPost = async (title: string, categories: Category[]) => {
  const newPost = new Post();

  newPost.name = title;
  newPost.categories = categories;

  await postRepository.save(newPost);

  return newPost;
};

export const selectPost = async (id: number) => {
  const post = await postRepository.findOne({
    where: {
      id,
    },
    join: {
      alias: "post",
      leftJoinAndSelect: {
        photos: "post.photos",
        categories: "post.categories",
      },
    },
  });

  console.log(post);

  return post;
};
