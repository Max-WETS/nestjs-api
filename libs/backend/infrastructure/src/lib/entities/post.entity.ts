import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '@nestjs-api/shared/domain';

@Entity()
export class PostEntity implements Post {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column()
  public content!: string;
}
