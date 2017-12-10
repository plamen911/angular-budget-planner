import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular Budget Planner';

    public viewContainerRef: ViewContainerRef;

    // https://github.com/PointInside/ng2-toastr/issues/148#issuecomment-330110380
    public constructor(public toastr: ToastsManager, viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
}
