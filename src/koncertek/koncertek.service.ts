import { Injectable } from '@nestjs/common';
import { CreateKoncertekDto } from './dto/create-koncertek.dto';
import { UpdateKoncertekDto } from './dto/update-koncertek.dto';
import { PrismaService } from '../prisma.service'; 
import { Koncert } from '@prisma/client';
import { Koncertek } from './entities/koncertek.entity';

@Injectable()
export class KoncertekService {

  constructor(private readonly prisma: PrismaService) {}

  async addKoncert(data: CreateKoncertekDto): Promise<Koncert> {
    return this.prisma.koncert.create({
      data,
    })
  }
  async findAll(): Promise<Koncertek[]> {
    return this.prisma.koncert.findMany()
    }
    async findOne(id: number): Promise<Koncert | null> {
      return this.prisma.koncert.findFirst({
        where: { id:id },
        select: {
          id: true,
          BandName: true,
          StartTime: true,
          Length: true,
          Postponed:true
        }
      });
    }



    async update(id: number, data: { BandName?: string; StartTime?: Date | string; Length?: number; Postponed?: boolean; }): Promise<Koncert> {
      return this.prisma.koncert.update({
        where: { id },
        data: {
          ...data,
          StartTime: data.StartTime ? new Date(data.StartTime).toISOString() : undefined,
        },
      });
    }
    


async remove(id: number): Promise<Koncert> {
  return this.prisma.koncert.delete({
    where: { id },
  });
}
}
