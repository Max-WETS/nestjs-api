import { Module } from '@nestjs/common';
import { BackendUiRestModule } from '@nestjs-api/backend/ui-rest';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendUiRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
