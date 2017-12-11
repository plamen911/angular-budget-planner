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
import {GuardsModule} from './core/guards/guards.module';
import {ServiceModule} from './core/services/services.module';

// Interceptors
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './core/interceptors/auth.interceptor';

import {MessagesComponent} from './components/messages/messages.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PlannerFormComponent} from './components/monthly-balance/planner-form/planner-form.component';
import {ExpenseListComponent} from './components/monthly-balance/expense-list/expense-list.component';
import {ExpenseFormComponent} from './components/monthly-balance/expense-form/expense-form.component';
import {PlanCardComponent} from './components/yearly-balance/plan-card/plan-card.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        ToastModule.forRoot(),
        GuardsModule,
        ServiceModule
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
        ExpenseFormComponent,
        PlanCardComponent,
        PreloaderComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
