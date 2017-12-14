import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MonthlyBalanceComponent} from './components/monthly-balance/monthly-balance.component';
import {YearlyBalanceComponent} from './components/yearly-balance/yearly-balance.component';
import {ExpenseFormComponent} from './components/monthly-balance/expense-form/expense-form.component';
import {UsersComponent} from './components/users/users.component';
import {UserFormComponent} from './components/users/user-form/user-form.component';

import {AuthGuard} from './core/guards/authentication/auth.guard';
import {AdminOnlyGuard} from './core/guards/authentication/admin-only.guard';

const routes: Routes = [
    // public routes
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // restricted routes
    {path: 'monthly-balance/:year/:month/add-expenses', canActivate: [AuthGuard], component: ExpenseFormComponent},
    {path: 'monthly-balance/:year/:month', canActivate: [AuthGuard], component: MonthlyBalanceComponent},
    {path: 'monthly-balance/:year', canActivate: [AuthGuard], component: MonthlyBalanceComponent},
    {path: 'monthly-balance', canActivate: [AuthGuard], component: MonthlyBalanceComponent},
    {path: 'yearly-balance/:year', canActivate: [AuthGuard], component: YearlyBalanceComponent},
    {path: 'yearly-balance', canActivate: [AuthGuard], component: YearlyBalanceComponent},
    // admin only routes
    {path: 'users/create', canActivate: [AdminOnlyGuard], component: UserFormComponent},
    {path: 'users', canActivate: [AdminOnlyGuard], component: UsersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}