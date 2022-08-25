import { Module } from '@nestjs/common';
import {
  AuthenticationService,
  UsersService,
} from '@nestjs-api/backend/core/application-services';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@nestjs-api/backend/core/application-services';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from '@nestjs-api/backend/core/application-services';

export const LocalJwtModule = JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}`,
    },
  }),
});

@Module({
  imports: [PassportModule, ConfigModule, LocalJwtModule],
  providers: [UsersService, AuthenticationService, LocalStrategy, JwtStrategy],
  controllers: [],
  exports: [AuthenticationService],
})
export class AuthModule {}
