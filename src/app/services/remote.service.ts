import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/User';

// const baseUrl = 'http://localhost:5000/';
const baseUrl = 'https://plamen.thewebdesignco.com:5000/';
// const baseUrl = 'https://plamen.thewebdesignco.com/budget-planner/';
// const baseUrl = 'http://plamen.thewebdesignco.com/budget-planner/';

@Injectable()
export class RemoteService {
    constructor(private http: HttpClient) {
    }

    register(name: string, email: string, password: string): Observable<User> {
        return this.http.post<User>(baseUrl + 'auth/signup', {name, email, password});
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(baseUrl + 'auth/login', {email, password});
    }

    getYearlyBalance(year: number): Observable<any> {
        return this.http.get<any>(baseUrl + 'plan/' + year);
    }

    getMonthlyBalance(year: number, month: number): Observable<any> {
        return this.http.get<any>(baseUrl + 'plan/' + year + '/' + month);
    }

    updateMonthlyIncomeAndBudget(year: string, month: string, income: number, budget: number): Observable<any> {
        return this.http.post<any>(baseUrl + 'plan/' + year + '/' + month, {income, budget});
    }

    addExpenses(year, month, date, name, category, amount): Observable<any> {
        return this.http.post<any>(baseUrl + 'plan/' + year + '/' + month + '/expense', {date, name, category, amount});
    }

    deleteExpense(expenseId: number): Observable<any> {
        return this.http.delete<any>(baseUrl + 'plan/expense/' + expenseId);
    }
}
