import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import {RemoteService} from '../../core/services/remote.service';
import {AuthService} from '../../core/services/authentication/auth.service';
import {MessageService} from '../../core/services/message.service';
import {LoginModel} from '../../core/models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public model: LoginModel;
    public submitted: boolean;

    constructor(private router: Router,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.model = new LoginModel('', '');
        this.submitted = false;
    }

    ngOnInit() {
        if (this.authService.isAuthed()) {
            this.messageService.add('Already logged in! Redirecting...');
            this.redirectToPage();
        }
    }

    onSubmit(): void {
        // client-side validation
        if (!this.model.email.trim() || !this.model.password.trim()) {
            this.toastr.error('Incorrect email or password.');
            return;
        }

        this.submitted = true;
        this.messageService.add(`Trying to login with email '${this.model.email}'...`);

        this.remoteService.login(this.model)
            .subscribe(
                (res: any): void => {
                    this.submitted = false;
                    this.messageService.add('Login response: ' + JSON.stringify(res));
                    if (res.success) {
                        this.authService.saveSession(res);
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

    private redirectToPage(): void {
        const year: number = +(new Date()).getFullYear();
        const month: number = +(new Date()).getMonth() + 1;
        this.router.navigateByUrl(`/monthly-balance/${year}/${month}`);
    }
}
