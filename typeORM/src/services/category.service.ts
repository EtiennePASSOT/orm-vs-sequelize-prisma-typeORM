import { Category } from "../models/Category.js";
import AppDataSource from "../orm.js";

const categoryRepository = AppDataSource.getRepository(Category);

export const createCategory = async (name: string) => {
  const newCategory = new Category();

  newCategory.name = name;

  await categoryRepository.save(newCategory);

  return newCategory;
};

export const selectCategory = async (id: number) => {
  const category = await categoryRepository.findOneBy({
    id,
  });

  return category;
};
