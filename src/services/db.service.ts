import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';


@Injectable({
    providedIn: 'root'
})
export class DbService {

    constructor(
        private log: LoggerService
    ) {}

    // rest of implementation omitted

}
