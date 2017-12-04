import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {RemoteService} from '../../services/remote.service';
import {AuthService} from '../../services/auth.service';
import {MessageService} from '../../services/message.service';
import {User} from '../../models/User';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(private route: Router,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService) {
        this.user = new User('', '', '');
    }

    ngOnInit() {
        if (this.authService.isAuthed()) {
            this.messageService.add('Already logged in! Redirecting...');
            this.redirectToPage();
        }
    }

    register(e) {
        e.preventDefault();
        const name = this.user.name.trim();
        const email = this.user.email.trim();
        const password = this.user.password.trim();

        this.messageService.add(`Trying to register with name "${name}" and email "${email}"...`);

        this.remoteService.register(name, email, password)
            .subscribe(
                (res: any) => {
                    this.messageService.add('Register response: ' + JSON.stringify(res));
                    if (res.success) {
                        this.messageService.add(`Registered! Trying to login with email "${email}"...`);
                        this.remoteService.login(email, password)
                            .subscribe(
                                (res: any) => {
                                    this.messageService.add('Login response: ' + JSON.stringify(res));
                                    if (res.success) {
                                        this.authService.saveSession(res);
                                        this.redirectToPage();
                                    } else if (res.errors) {
                                        this.messageService.add('Failed to login: ' + JSON.stringify(res.errors));
                                    }
                                },
                                error => console.warn(error)
                            );

                    } else if (res.errors) {
                        this.messageService.add('Failed to register: ' + JSON.stringify(res.errors));
                    }
                },
                error => {
                    this.messageService.add(error.message);
                    console.warn(error);
                });
    }

    private redirectToPage(): void {
        const year: number = +(new Date()).getFullYear();
        const month: number = +(new Date()).getMonth() + 1;
        this.route.navigateByUrl(`/monthly-balance/${year}/${month}`);
    }
}
