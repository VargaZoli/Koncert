import { Module } from '@nestjs/common';
import { KoncertekService } from './koncertek.service';
import { KoncertekController } from './koncertek.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [KoncertekController],
  providers: [KoncertekService,PrismaService],
})
export class KoncertekModule {}
