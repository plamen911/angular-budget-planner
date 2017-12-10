import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MonthlyBalanceComponent} from './components/monthly-balance/monthly-balance.component';
import {YearlyBalanceComponent} from './components/yearly-balance/yearly-balance.component';

import {AppRoutingModule} from './app-routing.module';

// Modules
import {HttpClientModule} from '@angular/common/http';

// Services
import {AuthService} from './services/auth.service';
import {MessageService} from './services/message.service';
import {RemoteService} from './services/remote.service';
import {AuthGuard} from './services/auth.guard';
import {BudgetPlannerService} from './services/budget-planner.service';

// Interceptors
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {MessagesComponent} from './components/messages/messages.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PlannerFormComponent} from './components/monthly-balance/planner-form/planner-form.component';
import {ExpenseListComponent} from './components/monthly-balance/expense-list/expense-list.component';
import { ExpenseFormComponent } from './components/monthly-balance/expense-form/expense-form.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        ToastModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        MonthlyBalanceComponent,
        YearlyBalanceComponent,
        MessagesComponent,
        HeaderComponent,
        FooterComponent,
        PlannerFormComponent,
        ExpenseListComponent,
        ExpenseFormComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        AuthService,
        MessageService,
        RemoteService,
        AuthGuard,
        BudgetPlannerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
