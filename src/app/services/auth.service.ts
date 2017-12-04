import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

    constructor() {
    }

    saveSession(data: any): void {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.user.name);
    }

    destroySession(): void {
        localStorage.clear();
    }

    isAuthed(): boolean {
        return localStorage.getItem('token') !== null;
    }

    getUsername(): string {
        if (!this.isAuthed()) {
            return ''
        }
        return localStorage.getItem('username')
    }

    getAuthToken(): string {
        if (!this.isAuthed()) {
            return ''
        }
        return localStorage.getItem('token')
    }

    isAuthor(record: any): boolean {
        return record._acl.creator === localStorage.getItem('username')
    }
}
