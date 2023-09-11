import { Photo } from "../models/Photo.js";
import AppDataSource from "../orm.js";
import { faker } from "@faker-js/faker";

export const createPhoto = async () => {
  const photo = new Photo();
  photo.name = faker.lorem.words({ min: 3, max: 6 });
  photo.description = faker.lorem.text();
  photo.filename = faker.system.fileName();
  photo.views = faker.number.int({ min: 0, max: 100 });
  photo.isPublished = true;

  await AppDataSource.manager.save(photo);
  console.log("Photo has been saved. Photo id is", photo.id);

  return photo;
};

export const selectPhoto = async (id: number) => {
  const photo = await AppDataSource.manager.findOneBy(Photo, {
    id: 1,
  });

  console.log("Photo name is ", photo?.name);
  return photo;
};

export const updatePhoto = async (id: number, name: string) => {
  const photo = await selectPhoto(id);

  photo!.name = name;

  AppDataSource.manager.save(photo!);

  console.log("Photo updated successfully!");
};

export const deletePhoto = async (id: number) => {
  const photo = await selectPhoto(id);

  AppDataSource.manager.remove(photo!);

  console.log("Photo deleted successfully!");
};
