import { SpectatorServiceFactory, createServiceFactory } from '@ngneat/spectator/jest';

import { DbService } from './db.service';
import { LoggerService } from './logger.service';

describe('DbService', () => {
  let spectator: SpectatorServiceFactory<DbService>;

  beforeEach(() => {
      spectator = createServiceFactory({
          service: DbService,
          mocks: [
              LoggerService
          ]
      });
  });

  it('should be instantiated', () => {
      const {service} = spectator();
      expect(service).toBeInstanceOf(DbService);
  });

});
