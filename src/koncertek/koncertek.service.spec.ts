import { Test, TestingModule } from '@nestjs/testing';
import { KoncertekService } from './koncertek.service';

describe('KoncertekService', () => {
  let service: KoncertekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KoncertekService],
    }).compile();

    service = module.get<KoncertekService>(KoncertekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
