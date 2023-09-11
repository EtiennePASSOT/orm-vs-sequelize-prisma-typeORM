import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./User.ts";

@Table
export class Post extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
