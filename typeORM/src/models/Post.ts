import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Photo } from "./Photo.ts";
import { Survey } from "./Survey.ts";
import { Category } from "./Category.ts";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, (photo) => photo.post)
  photos: Photo[];

  @OneToOne(() => Survey)
  @JoinColumn()
  survey: Survey;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];
}
