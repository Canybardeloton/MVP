import { Test, TestingModule } from '@nestjs/testing';
import { BilansService } from './bilans.service';

describe('BilansService', () => {
  let service: BilansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BilansService],
    }).compile();

    service = module.get<BilansService>(BilansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
