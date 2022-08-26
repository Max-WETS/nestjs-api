import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from '@nestjs-api/shared/utils';
import { CreateChargeDto, RequestWithUser } from '@nestjs-api/shared/domain';
import { StripeService } from '@nestjs-api/backend/core/application-services';

@Controller('charge')
export class ChargeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createCharge(
    @Body() charge: CreateChargeDto,
    @Req() request: RequestWithUser
  ) {
    await this.stripeService.charge(
      charge.amount,
      charge.paymentMethodId,
      request.user.stripeCustomerId
    );
  }
}
