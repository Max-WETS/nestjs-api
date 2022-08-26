import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsObject,
} from 'class-validator';
import { User, Address } from '../models';

export class RegisterDto implements User {
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password!: string;

  @IsNotEmpty()
  @IsObject()
  address!: Address;
}
