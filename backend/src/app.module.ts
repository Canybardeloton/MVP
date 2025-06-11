import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { BilansModule } from './bilans/bilans.module';
import { TestsModule } from './tests/tests.module';
import { UploadsModule } from './uploads/uploads.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [AuthModule, PatientsModule, BilansModule, TestsModule, UploadsModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
