import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Post } from "./Post.ts";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @ManyToOne(() => Post, (post) => post.photos)
  post: Post;
}
