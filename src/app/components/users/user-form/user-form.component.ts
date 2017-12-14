import {Component, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

import {RemoteService} from '../../../core/services/remote.service';
import {MessageService} from '../../../core/services/message.service';
import {AuthService} from '../../../core/services/authentication/auth.service';
import {RegisterModel} from '../../../core/models/register.model';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    model: RegisterModel;
    public submitted: boolean;

    constructor(private router: Router,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.model = new RegisterModel('', '', '', '');
        this.submitted = false;
    }

    onSubmit() {
        if (!this.model.name.trim()) {
            this.toastr.error('Please provide user name.');
            return;
        }
        if (!this.model.email.trim()) {
            this.toastr.error('Please provide a correct email address.');
            return;
        }
        if (!this.model.password.trim() || this.model.password.length < 4) {
            this.toastr.error('Password must have at least 4 characters.');
            return;
        }
        if (this.model.password !== this.model.confPassword) {
            this.toastr.error('Passwords do not match.');
            return;
        }

        this.submitted = true;
        this.messageService.add(`Trying to create user with name '${this.model.name}' and email '${this.model.email}'...`);

        this.remoteService.register(this.model)
            .subscribe(
                (res: any) => {
                    this.messageService.add('Server response: ' + JSON.stringify(res));
                    if (res.success) {
                        this.toastr.success(res.message);
                        this.redirectToPage();
                    }
                },
                (error): void => {
                    this.submitted = false;
                    this.messageService.add(error.message);
                }
            );
    }

    private redirectToPage(): void {
        this.router.navigateByUrl('/users');
    }

}
