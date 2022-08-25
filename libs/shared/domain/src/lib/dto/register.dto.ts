import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsObject,
  IsArray,
} from 'class-validator';
import { User, Address, Post } from '../models';

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

  @IsArray()
  posts!: Post[];
}
