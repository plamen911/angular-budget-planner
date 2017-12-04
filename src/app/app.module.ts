import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

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

// Interceptors
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import { MessagesComponent } from './components/messages/messages.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        MonthlyBalanceComponent,
        YearlyBalanceComponent,
        MessagesComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        AuthService,
        MessageService,
        RemoteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
