import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from '@nestjs-api/backend/core/application-services';
import {
  RegisterDto,
  LocalAuthenticationGuard,
  RequestWithUser,
} from '@nestjs-api/shared/domain';

@Controller('authentication')
export class AuthController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}
