import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

import {UserModel} from '../../core/models/user.model';
import {RemoteService} from '../../core/services/remote.service';
import {MessageService} from '../../core/services/message.service';
import {BudgetPlannerService} from '../../core/services/budget-planner.service';
import {AuthService} from '../../core/services/authentication/auth.service';
import {MonthlyBalanceModel} from "../../core/models/monthly-balance.model";
import {User} from "../../../../../../services-and-di/client/src/app/models/User";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users: any;
    public submitted: boolean;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private budgetPlannerService: BudgetPlannerService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.users = [];
        this.submitted = false;
    }

    ngOnInit() {
        this.remoteService.getUsers()
            .subscribe((res: any): void => {
                this.messageService.add('Got users: ' + JSON.stringify(res));
                this.users = Object.keys(res).map((userId: string): UserModel => res[userId]);
            });
    }

    onDelete(e: Event, user: UserModel): void {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this user?')) {
            this.submitted = true;
            const userId = user.id;
            this.messageService.add(`Deleting user ${userId}...`);

            this.remoteService.deleteUser(userId)
                .subscribe(
                    (res: any): void => {
                        this.submitted = false;
                        this.messageService.add('User deleted response: ' + JSON.stringify(res));
                        if (res.success) {
                            this.users = this.users.filter(u => u.id !== user.id);
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
    }

}
