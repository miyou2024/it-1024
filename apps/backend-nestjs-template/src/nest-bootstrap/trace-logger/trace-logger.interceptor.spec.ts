import { TraceLoggerInterceptor } from './trace-logger.interceptor';

describe('TraceLoggerInterceptor', () => {
  it('should be defined', () => {
    expect(new TraceLoggerInterceptor()).toBeDefined();
  });
});
