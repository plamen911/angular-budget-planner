import {Component, OnInit, OnDestroy, ViewContainerRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Subscription} from 'rxjs/Subscription';

import {RemoteService} from '../../../services/remote.service';
import {MessageService} from '../../../services/message.service';
import {AuthService} from '../../../services/auth.service';
import {BudgetPlannerService} from '../../../services/budget-planner.service';
import {BudgetPlanner} from "../budget-planner.model";

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit, OnDestroy {
    public model: BudgetPlanner;
    public year: number;
    public month: number;

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

        this.subscription = this.budgetPlannerService.budgetPlannerLoaded$.subscribe(
            (data: any): void => {
                this.model = data.budgetPlanner;
                this.year = data.year;
                this.month = data.month;

                console.log('inside expense list...');
                console.log(data);
            }
        );

    }

    ngOnInit() {
        //console.log(this.year);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }

}
