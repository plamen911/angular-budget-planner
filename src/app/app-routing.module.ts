import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MonthlyBalanceComponent} from './components/monthly-balance/monthly-balance.component';
import {YearlyBalanceComponent} from './components/yearly-balance/yearly-balance.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'monthly-balance/:year/:month/add-expenses', component: MonthlyBalanceComponent},
    {path: 'monthly-balance/:year/:month', component: MonthlyBalanceComponent},
    {path: 'monthly-balance/:year', component: MonthlyBalanceComponent},
    {path: 'monthly-balance', component: MonthlyBalanceComponent},
    {path: 'yearly-balance/:year', component: YearlyBalanceComponent},
    {path: 'yearly-balance', component: YearlyBalanceComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}