import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../../services/authentication/auth.service";

@Injectable()
export class AdminOnlyGuard implements CanActivate {
    constructor(private router: Router,
                private authService: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isAdmin()) {
            if (!this.authService.isAuthed()) {
                this.router.navigate(['/login']);
            } else {
                this.router.navigate(['/yearly-balance']);
            }
            return false;
        }
        return true;
    }
}
