import { TestBed, inject } from '@angular/core/testing';

import { BudgetPlannerService } from './budget-planner.service';

describe('BudgetPlannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetPlannerService]
    });
  });

  it('should be created', inject([BudgetPlannerService], (service: BudgetPlannerService) => {
    expect(service).toBeTruthy();
  }));
});
