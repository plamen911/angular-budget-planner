import {Component, OnInit, OnDestroy, ViewContainerRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import {AuthService} from '../../services/auth.service';
import {MessageService} from '../../services/message.service';
import {RemoteService} from '../../services/remote.service';
import {BudgetPlanner} from './budget-planner.model';
import {BudgetPlannerService} from '../../services/budget-planner.service';

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

        this.subscription = this.budgetPlannerService.budgetPlannerUpdated$.subscribe(
            (res: any): void => {
                this.loadBudgetPlanner(this.year, this.month);
            }
        );
    }

    ngOnInit() {
        if (!this.authService.isAuthed()) {
            this.messageService.add('Access denied! Redirecting to login...');
            this.router.navigateByUrl(`/login`);
        }

        this.year = +this.route.snapshot.paramMap.get('year') || (new Date()).getFullYear();
        this.month = +this.route.snapshot.paramMap.get('month') || (new Date()).getMonth() + 1;

        this.loadBudgetPlanner(this.year, this.month);
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
