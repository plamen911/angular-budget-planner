import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';

import {RemoteService} from '../../services/remote.service';
import {AuthService} from '../../services/auth.service';
import {MessageService} from '../../services/message.service';
import {LoginModel} from '../login/login.model';
import {RegisterModel} from './register.model';
import {ToastsManager} from "ng2-toastr";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: RegisterModel;
    public submitted: boolean;

    constructor(private router: Router,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {
        this.model = new RegisterModel('', '', '', '');
        this.submitted = false;
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        if (this.authService.isAuthed()) {
            this.messageService.add('Already logged in! Redirecting...');
            this.redirectToPage();
        }
    }

    onSubmit() {
        if (!this.model.name.trim()) {
            this.remoteService.displayError('Please provide your name.');
            return;
        }
        if (!this.model.email.trim()) {
            this.remoteService.displayError('Please provide a correct email address.');
            return;
        }
        if (!this.model.password.trim() || this.model.password.length < 4) {
            this.remoteService.displayError('Password must have at least 4 characters.');
            return;
        }
        if (this.model.password !== this.model.confPassword) {
            this.remoteService.displayError('Passwords do not match.');
            return;
        }

        this.submitted = true;
        this.messageService.add(`Trying to register with name '${this.model.name}' and email '${this.model.email}'...`);

        this.remoteService.register(this.model)
            .subscribe(
                (res: any) => {
                    this.messageService.add('Register response: ' + JSON.stringify(res));
                    if (res.success) {
                        this.messageService.add(`Registered! Trying to login with email '${this.model.email}'...`);
                        this.remoteService.login(new LoginModel(this.model.email, this.model.password))
                            .subscribe(
                                (res: any): void => {
                                    this.submitted = false;
                                    this.messageService.add('Login response: ' + JSON.stringify(res));
                                    if (res.success) {
                                        this.authService.saveSession(res);
                                        this.remoteService.displaySuccess(res.message, this.redirectToPage.bind(this));
                                    }
                                },
                                (error): any => {
                                    this.submitted = false;
                                    this.messageService.add(error.message);
                                },
                                (): void => {
                                    this.submitted = false;
                                }
                            );
                    }
                },
                (error): void => {
                    this.submitted = false;
                    this.messageService.add(error.message);
                }
            );
    }

    private redirectToPage(): void {
        const year: number = +(new Date()).getFullYear();
        const month: number = +(new Date()).getMonth() + 1;
        this.router.navigateByUrl(`/monthly-balance/${year}/${month}`);
    }
}
