import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { User } from '../models';

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
}
