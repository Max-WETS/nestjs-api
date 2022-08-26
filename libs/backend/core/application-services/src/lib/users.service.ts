import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@nestjs-api/shared/domain';
import { IUserDomainRepository } from '@nestjs-api/backend/core/domain-services';
import { StripeService } from './stripe.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: IUserDomainRepository,
    private stripeService: StripeService
  ) {}

  async getById(id: number) {
    const user = await this.usersRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND
    );
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND
    );
  }

  async create(userData: Omit<User, 'id'>) {
    const stripeCustomer = await this.stripeService.createCustomer(
      userData.name,
      userData.email
    );
    const newUser = await this.usersRepository.create({
      ...userData,
      stripeCustomerId: stripeCustomer.id,
    });
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
