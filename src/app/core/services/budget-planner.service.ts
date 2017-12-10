import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BudgetPlannerService {

    // Observable string sources
    private budgetPlannerLoadedSource = new Subject<any>();
    private expenseDeletedSource = new Subject<string>();

    // Observable string streams
    budgetPlannerLoaded$ = this.budgetPlannerLoadedSource.asObservable();
    expenseDeleted$ = this.expenseDeletedSource.asObservable();

    // Service budget planner commands
    loadBudgetPlanner(data: any) {
        this.budgetPlannerLoadedSource.next(data);
    }

    deleteExpense(expenseId: string) {
        this.expenseDeletedSource.next(expenseId);
    }
}
