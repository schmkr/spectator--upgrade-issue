import { createService } from '@netbasal/spectator';

import { DbService } from './db.service';
import { LoggerService } from './logger.service';

describe('DbService', () => {
  const spectator = createService({
    service: DbService,
    mocks: [
      LoggerService
    ]
  });

  it('should be instantiated', () => {
    expect(spectator.service).toBeInstanceOf(DbService);
  });

});
