import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { KoncertekService } from './koncertek.service';
import { CreateKoncertekDto } from './dto/create-koncertek.dto';
import { UpdateKoncertekDto } from './dto/update-koncertek.dto';

@Controller('koncertek')
export class KoncertekController {
  constructor(private readonly koncertekService: KoncertekService) {}

  @Post()
  addKoncert(@Body() createToyDto: CreateKoncertekDto) {
    return this.koncertekService.addKoncert(createToyDto);
  }

  @Get()
  async findAll() {
    try {
      const koncertek = await this.koncertekService.findAll();
      if (!koncertek || koncertek.length === 0) {
        throw new HttpException(
          'Nincs talált koncert.',
          HttpStatus.NOT_FOUND
        );
      }
      return { data: koncertek };
    } catch  {
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const koncertek = await this.koncertekService.findOne(+id);
      if (!koncertek) {
        throw new HttpException(
          `Hiba az id keresésénél ${id} `,
          HttpStatus.NOT_FOUND
        );
      }
      return { data: koncertek };
    } catch {
      throw new HttpException(
        `Hiba az id keresésénél ${id}.`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateKoncertekDto: UpdateKoncertekDto) {
    try {
      const updatedKoncert = await this.koncertekService.update(+id, UpdateKoncertekDto);
      if (!updatedKoncert) {
        throw new HttpException(
          `lehet hogy ilyen id játék nem létezik ${id} .`,
          HttpStatus.NOT_FOUND
        );
      }
      return { message: 'Koncert sikeresen frissítve', data: updatedKoncert };
    } catch {
      throw new HttpException(
        `Hiba a koncert frissítésénél ${id}.`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deletedKoncert = await this.koncertekService.remove(+id);
      if (!deletedKoncert) {
        throw new HttpException(
          `Koncert ilyen id-val lehet nem létezik: ${id} `,
          HttpStatus.NOT_FOUND
        );
      }
      return { message: 'Sikeres koncert törlés' };
    } catch{
      throw new HttpException(
        `Hiba a koncert törlésénél: ${id}.`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
