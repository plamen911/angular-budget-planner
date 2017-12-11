import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

import {AuthService} from '../../core/services/authentication/auth.service';
import {MessageService} from '../../core/services/message.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    year: number;
    month: number;

    constructor(public authService: AuthService,
                private route: ActivatedRoute,
                private router: Router,
                private messageService: MessageService,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.year = +this.route.snapshot.paramMap.get('year') || +(new Date()).getFullYear();
        this.month = +this.route.snapshot.paramMap.get('month') || +(new Date()).getMonth() + 1;
    }

    logout(e): void {
        e.preventDefault();
        this.authService.destroySession();
        this.messageService.add('Successfully logged out.');
        this.toastr.success('Successfully logged out.');
        this.router.navigateByUrl('/login');
    }
}
