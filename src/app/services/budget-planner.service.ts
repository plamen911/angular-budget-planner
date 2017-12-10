import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BudgetPlannerService {

    // Observable string sources
    private budgetPlannerLoadedSource = new Subject<any>();
    private budgetPlannerUpdatedSource = new Subject<any>();

    // Observable string streams
    budgetPlannerLoaded$ = this.budgetPlannerLoadedSource.asObservable();
    budgetPlannerUpdated$ = this.budgetPlannerUpdatedSource.asObservable();

    // Service budget planner commands
    loadBudgetPlanner(data: any) {
        this.budgetPlannerLoadedSource.next(data);
    }

    updateBudgetPlanner(data: any) {
        this.budgetPlannerUpdatedSource.next(data);
    }
}
