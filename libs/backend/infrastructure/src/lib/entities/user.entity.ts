import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@nestjs-api/shared/domain';
import { Expose } from 'class-transformer';
import { AddressEntity } from './address.entity';
import { PostEntity } from './post.entity';

@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  @Expose()
  public email!: string;

  @Column()
  @Expose()
  public name!: string;

  @Column()
  public password!: string;

  @OneToOne(() => AddressEntity, { eager: true, cascade: true })
  @JoinColumn()
  public address!: AddressEntity;

  @OneToMany(() => PostEntity, (post: PostEntity) => post.author)
  public posts!: PostEntity[];
}
