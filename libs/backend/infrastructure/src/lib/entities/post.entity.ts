import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from '@nestjs-api/shared/domain';
import { UserEntity } from './user.entity';
import { CategoryEntity } from './category.entity';

@Entity()
export class PostEntity implements Post {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column()
  public content!: string;

  @Column({ nullable: true })
  public category!: string;

  @ManyToOne(() => UserEntity, (author: UserEntity) => author.posts)
  public author!: UserEntity;

  @ManyToMany(() => CategoryEntity)
  @JoinTable()
  public categories!: CategoryEntity[];
}
