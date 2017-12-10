import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RemoteService} from '../../services/remote.service';
import {AuthService} from '../../services/auth.service';
import {MessageService} from '../../services/message.service';
import {MonthlyBalanceModel} from '../../models/monthly-balance.model';

@Component({
    selector: 'app-yearly-balance',
    templateUrl: './yearly-balance.component.html',
    styleUrls: ['./yearly-balance.component.css']
})
export class YearlyBalanceComponent implements OnInit {
    public year: number;
    public models: MonthlyBalanceModel[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private remoteService: RemoteService,
                private authService: AuthService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.year = +this.route.snapshot.paramMap.get('year') || (new Date()).getFullYear();
        this.remoteService.getYearlyBalance(this.year)
            .subscribe(
                (res: any) => {
                    this.messageService.add('Loaded months: ' + JSON.stringify(res));
                    this.models = Object.keys(res).map(month => (
                            new MonthlyBalanceModel(this.year, +month, res[month].budget, res[month].balance)
                        )
                    );
                }
            );
    }

}
