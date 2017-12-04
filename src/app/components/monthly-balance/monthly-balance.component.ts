import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-monthly-balance',
  templateUrl: './monthly-balance.component.html',
  styleUrls: ['./monthly-balance.component.css']
})
export class MonthlyBalanceComponent implements OnInit {

  constructor(private route: Router,
              private authService: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
      if (!this.authService.isAuthed()) {
          this.messageService.add('Access denied! Redirecting to login...');
          this.route.navigateByUrl(`/login`);
      }
  }
}
