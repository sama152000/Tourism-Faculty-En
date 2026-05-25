/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdministrationsService } from './administrations.service';

describe('Service: Administrations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministrationsService]
    });
  });

  it('should ...', inject([AdministrationsService], (service: AdministrationsService) => {
    expect(service).toBeTruthy();
  }));
});
