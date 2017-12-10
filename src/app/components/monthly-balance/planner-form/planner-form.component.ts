import {Component, OnInit, OnDestroy, ViewContainerRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Subscription} from 'rxjs/Subscription';

import {BudgetPlanner} from '../../../core/models/budget-planner.model'
import {RemoteService} from '../../../core/services/remote.service';
import {MessageService} from '../../../core/services/message.service';
import {AuthService} from '../../../core/services/authentication/auth.service';
import {BudgetPlannerService} from '../../../core/services/budget-planner.service';

@Component({
    selector: 'app-planner-form',
    templateUrl: './planner-form.component.html',
    styleUrls: ['./planner-form.component.css']
})
export class PlannerFormComponent implements OnInit, OnDestroy {
    public model: BudgetPlanner;
    public year: number;
    public month: number;
    public submitted: boolean;

    public subscription: Subscription;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private budgetPlannerService: BudgetPlannerService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {

        this.toastr.setRootViewContainerRef(vcr);
        this.model = new BudgetPlanner(0, 0);
        this.submitted = false;

        this.subscription = this.budgetPlannerService.budgetPlannerLoaded$.subscribe(
            (data: any): void => {
                this.model = data.budgetPlanner;
                this.year = data.year;
                this.month = data.month;
            }
        );
    }

    ngOnInit() {
    }

    onSubmit(): void {
        this.submitted = true;
        this.messageService.add(`Submitting planner form...`);

        this.remoteService.updateMonthlyIncomeAndBudget(
            this.year,
            this.month,
            this.model.income,
            this.model.budget
        )
            .subscribe(
                (res: any): void => {
                    this.submitted = false;
                    this.messageService.add('Server response: ' + JSON.stringify(res));
                    if (res.success) {
                        this.model.budget = res.plan.budget;
                        this.model.income = res.plan.income;

                        this.remoteService.displaySuccess(res.message, this.redirectToPage.bind(this));
                    }
                },
                (error): void => {
                    this.submitted = false;
                    this.messageService.add(error.message);
                },
                (): void => {
                    this.submitted = false;
                }
            );
    }

    private redirectToPage(): void {
        this.router.navigateByUrl(`/monthly-balance/${this.year}/${this.month}`);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
