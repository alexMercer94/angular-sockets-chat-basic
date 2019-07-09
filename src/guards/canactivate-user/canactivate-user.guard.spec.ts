import { TestBed, async, inject } from '@angular/core/testing';

import { CanactivateUserGuard } from './canactivate-user.guard';

describe('CanactivateUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactivateUserGuard]
    });
  });

  it('should ...', inject([CanactivateUserGuard], (guard: CanactivateUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
