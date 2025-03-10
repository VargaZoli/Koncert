import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KoncertekModule } from './koncertek/koncertek.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [KoncertekModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
