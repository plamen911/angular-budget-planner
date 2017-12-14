import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {NotificationModel} from '../models/notification.model';

@Injectable()
export class NotificationService {

    // Observable string sources
    private notificationLoadedSource = new Subject<NotificationModel>();

    // Observable string streams
    notificationLoaded$ = this.notificationLoadedSource.asObservable();

    error(message: string): void {
        this.notify(new NotificationModel('error', message));
    }

    success(message: string): void {
        this.notify(new NotificationModel('success', message));
    }

    info(message: string): void {
        this.notify(new NotificationModel('info', message));
    }
    
    warning(message: string): void {
        this.notify(new NotificationModel('warning', message));
    }

    // Service notification commands
    private notify(model: NotificationModel): void {
        this.notificationLoadedSource.next(model);
    }
}
