import { Test, TestingModule } from '@nestjs/testing';
import { TraceLoggerService } from './trace-logger.service';

describe('TraceLoggerService', () => {
  let service: TraceLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraceLoggerService],
    }).compile();

    service = module.get<TraceLoggerService>(TraceLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
