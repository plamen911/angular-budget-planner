import {Component, OnInit, OnDestroy, ViewContainerRef, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import {MonthlyBalanceModel} from '../../../models/monthly-balance.model';
import {numberToMonth} from '../../../utils/utils';
import {BudgetPlannerService} from '../../../services/budget-planner.service';
import {RemoteService} from '../../../services/remote.service';
import {MessageService} from '../../../services/message.service';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-plan-card',
    templateUrl: './plan-card.component.html',
    styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit {
    @Input() model: MonthlyBalanceModel;
    public submitted: boolean;
    public numberToMonth: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private budgetPlannerService: BudgetPlannerService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.submitted = false;
        this.numberToMonth = numberToMonth;
    }

    ngOnInit() {
    }

}
