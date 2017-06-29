import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable()
export class A1Service {

  constructor(@Optional() @SkipSelf() parentService: A1Service) {
    if (parentService) {
      throw new Error('A1Service is already loaded. it in the CoreModule only');
    }
  }

}
