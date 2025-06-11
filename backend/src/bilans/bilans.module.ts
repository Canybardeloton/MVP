import { Module } from '@nestjs/common';
import { BilansService } from './bilans.service';
import { BilansController } from './bilans.controller';

@Module({
  providers: [BilansService],
  controllers: [BilansController]
})
export class BilansModule {}
