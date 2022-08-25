import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '@nestjs-api/shared/domain';

@Entity()
export class AddressEntity implements Address {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public street!: string;

  @Column()
  public city!: string;

  @Column()
  public country!: string;
}
