import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { Post } from "./Post.ts";

@Table
export class User extends Model {
  @Column
  firstname: string;

  @Column
  lastname: string;

  @HasMany(() => Post)
  posts: Post[];
}
