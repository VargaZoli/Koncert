import { PartialType } from '@nestjs/mapped-types';
import { CreateKoncertekDto } from './create-koncertek.dto';

export class UpdateKoncertekDto extends PartialType(CreateKoncertekDto) {}
