import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import {BudgetPlannerService} from '../../../core/services/budget-planner.service';
import {RemoteService} from '../../../core/services/remote.service';
import {MessageService} from '../../../core/services/message.service';
import {AuthService} from '../../../core/services/authentication/auth.service';
import {ExpenceModel} from '../../../core/models/expence.model';
import {numberToMonth} from '../../../core/utils/utils'

@Component({
    selector: 'app-expense-form',
    templateUrl: './expense-form.component.html',
    styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
    public model: ExpenceModel;
    public year: number;
    public month: number;
    public submitted: boolean;

    public numberToMonth: any;
    public categories = ['Non-essential', 'Fixed', 'Variable', 'Bitcoin'];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private budgetPlannerService: BudgetPlannerService,
                private toastr: ToastsManager) {
        this.year = +this.route.snapshot.paramMap.get('year') || (new Date()).getFullYear();
        this.month = +this.route.snapshot.paramMap.get('month') || (new Date()).getMonth() + 1;

        this.model = new ExpenceModel(null, '', this.categories[0], 0, 0, this.month, this.year);
        this.submitted = false;

        this.numberToMonth = numberToMonth;
    }

    ngOnInit() {

    }

    onSubmit(): void {
        // client-side validation
        if (!this.model.name.trim()) {
            this.toastr.error('Please provide expense name.');
            return;
        }
        if (this.model.amount && isNaN(this.model.amount)) {
            this.toastr.error( 'Amount must be a number.');
            return;
        }
        if (!this.model.date || isNaN(this.model.date) || this.model.date < 1 || this.model.date > 31) {
            this.toastr.error( 'Date must be an integer between 1 and 31.');
            return;
        }
        if (!this.model.category) {
            this.toastr.error('Category must be at least 1 character long.');
            return;
        }

        this.submitted = true;
        this.messageService.add(`Submitting expense form...`);

        const {date, name, category, amount} = this.model;

        this.remoteService.addExpenses(this.year, this.month, date, name, category, amount)
            .subscribe(
                (res: any): void => {
                    this.submitted = false;
                    this.messageService.add('Expense added response: ' + JSON.stringify(res));
                    if (res.success) {
                        this.toastr.success(res.message);
                        this.redirectToPage();
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

    onCancel(e) {
        e.preventDefault();
        this.redirectToPage();
    }

    private redirectToPage(): void {
        this.router.navigateByUrl(`/monthly-balance/${this.year}/${this.month}`);
    }
}
