import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RemoteService} from '../../services/remote.service';
import {AuthService} from '../../services/auth.service';
import {MessageService} from '../../services/message.service';

@Component({
    selector: 'app-yearly-balance',
    templateUrl: './yearly-balance.component.html',
    styleUrls: ['./yearly-balance.component.css']
})
export class YearlyBalanceComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        if (!this.authService.isAuthed()) {
            this.messageService.add('Access denied! Redirecting to login...');
            this.router.navigateByUrl(`/login`);
        }

        const year: number = +this.route.snapshot.paramMap.get('year') || +(new Date()).getFullYear();
        this.remoteService.getYearlyBalance(year)
            .subscribe(
                (res: any) => {
                    this.messageService.add('Yearly balance for ' + year + ': ' + JSON.stringify(res));
                    if (res.success) {

                    } else if (res.errors) {
                        this.messageService.add('Failed to get yearly balance: ' + JSON.stringify(res.errors));
                    }
                },
                error => console.warn(error)
            );
    }

}
