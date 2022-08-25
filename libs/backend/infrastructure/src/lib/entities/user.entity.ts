import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '@nestjs-api/shared/domain';
import { Expose } from 'class-transformer';

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
}
