import {Component, OnInit, OnDestroy, ViewContainerRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import {AuthService} from '../../core/services/authentication/auth.service';
import {MessageService} from '../../core/services/message.service';
import {RemoteService} from '../../core/services/remote.service';
import {BudgetPlanner} from '../../core/models/budget-planner.model';
import {BudgetPlannerService} from '../../core/services/budget-planner.service';
import {numberToMonth} from '../../core/utils/utils';

@Component({
    selector: 'app-monthly-balance',
    templateUrl: './monthly-balance.component.html',
    styleUrls: ['./monthly-balance.component.css']
})
export class MonthlyBalanceComponent implements OnInit, OnDestroy {
    public year: number;
    public month: number;

    public budgetPlanner: BudgetPlanner;
    public subscription: Subscription;

    public numberToMonth: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private budgetPlannerService: BudgetPlannerService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {

        this.budgetPlanner = new BudgetPlanner(0, 0);
        this.toastr.setRootViewContainerRef(vcr);
        this.numberToMonth = numberToMonth;

        this.year = +(new Date()).getFullYear();
        this.month = +(new Date()).getMonth() + 1;

        this.subscription = this.budgetPlannerService.expenseDeleted$.subscribe(
            (expenseId: string): void => {
                this.messageService.add(`About to delete expense # ${expenseId} from local list...`);

                const budgetPlanner = Object.assign({}, this.budgetPlanner);
                budgetPlanner.expenses = budgetPlanner.expenses.filter(e => e.id !== expenseId);
                const year = this.year;
                const month = this.month;

                this.budgetPlannerService.loadBudgetPlanner({year, month, budgetPlanner});
            }
        );

        this.route.params.subscribe(params => {
            this.year = +params['year'] || +(new Date()).getFullYear();
            this.month = +params['month'] || +(new Date()).getMonth() + 1;
            this.loadBudgetPlanner(this.year, this.month);
        });
    }

    ngOnInit() {
        // this.year = +this.route.snapshot.paramMap.get('year') || (new Date()).getFullYear();
        // this.month = +this.route.snapshot.paramMap.get('month') || (new Date()).getMonth() + 1;
        //
        // this.loadBudgetPlanner(this.year, this.month);
    }

    loadBudgetPlanner(year: number, month: number): void {
        this.remoteService.getMonthlyBalance(year, month)
            .subscribe(
                (budgetPlanner: BudgetPlanner): void => {
                    this.messageService.add('Server response: ' + JSON.stringify(budgetPlanner));
                    this.budgetPlanner = budgetPlanner;

                    this.budgetPlannerService.loadBudgetPlanner({year, month, budgetPlanner});
                }
            );
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
