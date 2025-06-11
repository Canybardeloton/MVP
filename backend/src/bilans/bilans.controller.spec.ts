import { Test, TestingModule } from '@nestjs/testing';
import { BilansController } from './bilans.controller';

describe('BilansController', () => {
  let controller: BilansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BilansController],
    }).compile();

    controller = module.get<BilansController>(BilansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
