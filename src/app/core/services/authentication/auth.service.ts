import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

    constructor() {
    }

    saveSession(data: any): void {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.user.id);
        localStorage.setItem('username', data.user.name);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('isAdmin', data.user.isAdmin);
    }

    destroySession(): void {
        localStorage.clear();
    }

    isAuthed(): boolean {
        return localStorage.getItem('token') !== null;
    }

    isAdmin(): boolean {
        if (!this.isAuthed()) {
            return false;
        }
        return localStorage.getItem('isAdmin') === 'true';
    }

    getUsername(): string {
        if (!this.isAuthed()) {
            return ''
        }
        return localStorage.getItem('username')
    }

    getUserId(): string {
        if (!this.isAuthed()) {
            return ''
        }
        return localStorage.getItem('id')
    }

    getAuthToken(): string {
        if (!this.isAuthed()) {
            return ''
        }
        return localStorage.getItem('token')
    }
}
