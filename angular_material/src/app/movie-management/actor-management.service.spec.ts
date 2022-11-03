import { TestBed } from '@angular/core/testing';

import { ActorManagementService } from './actor-management.service';

describe('ActorManagementService', () => {
  let service: ActorManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
