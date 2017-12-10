import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import {LoginModel} from '../models/login.model';
import {RegisterModel} from '../models/register.model';

// const baseUrl = 'http://localhost:5000/';
const baseUrl = 'https://plamen.thewebdesignco.com/';

@Injectable()
export class RemoteService {
    constructor(private http: HttpClient,
                private toastr: ToastsManager) {
    }

    register(model: RegisterModel): Observable<Object> {
        return this.http
            .post<Object>(baseUrl + 'auth/signup', JSON.stringify(model))
            .pipe(
                tap(res => this.handleServerResponse(res)),
                catchError(err => this.handleError(err))
            );
    }

    login(model: LoginModel): Observable<Object> {
        return this.http
            .post<any>(baseUrl + 'auth/login', JSON.stringify(model))
            .pipe(
                tap(res => this.handleServerResponse(res)),
                catchError(err => this.handleError(err))
            );
    }

    getYearlyBalance(year: number): Observable<any> {
        return this.http
            .get<any>(baseUrl + 'plan/' + year)
            .pipe(
                tap(res => this.handleServerResponse(res)),
                catchError(err => this.handleError(err))
            );
    }

    getMonthlyBalance(year: number, month: number): Observable<any> {
        return this.http
            .get<any>(baseUrl + 'plan/' + year + '/' + month)
            .pipe(
                tap(res => this.handleServerResponse(res)),
                catchError(err => this.handleError(err))
            );
    }

    updateMonthlyIncomeAndBudget(year: number, month: number, income: number, budget: number): Observable<any> {
        return this.http
            .post<any>(baseUrl + 'plan/' + year + '/' + month, {income, budget})
            .pipe(
                tap(res => this.handleServerResponse(res)),
                catchError(err => this.handleError(err))
            );
    }

    addExpenses(year, month, date, name, category, amount): Observable<any> {
        return this.http
            .post<any>(baseUrl + 'plan/' + year + '/' + month + '/expense', {date, name, category, amount})
            .pipe(
                tap(res => this.handleServerResponse(res)),
                catchError(err => this.handleError(err))
            );
    }

    deleteExpense(expenseId: string): Observable<any> {
        return this.http
            .delete<any>(baseUrl + 'plan/expense/' + expenseId)
            .pipe(
                tap(res => this.handleServerResponse(res)),
                catchError(err => this.handleError(err))
            );
    }

    handleServerResponse(res: any): void {
        if (!res.success) {
            this.displayError(res)
        }
        // if (res.success) {
        //     this.displaySuccess(res.message);
        // }
    }

    displaySuccess(message: string, cb: any): void {
        this.toastr.success(message).then(() => {
            setTimeout(cb, 2000);
        });
    }

    displayError(res: any): void {
        if (typeof res === 'string') {
            this.toastr.error(res);
        } else if (typeof res.message !== 'undefined') {
            const errors = (res.errors) ? Object.keys(res.errors).map(k => res.errors[k]) : [];
            // this.toastr.error(errors.length ? errors[0] : res.message);
            this.toastr.error(res.message);
        }
    }

    handleError(res: any): Observable<Object> {
        this.displayError(res);
        return Observable.throw(new Error(res.message));
    }
}
