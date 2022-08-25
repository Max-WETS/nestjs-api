import { Module } from '@nestjs/common';
import { AuthenticationService } from '@nestjs-api/backend/core/application-services';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@nestjs-api/backend/core/application-services';

@Module({
  imports: [PassportModule],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [],
})
export class AuthModule {}
