import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuard} from './authentication/auth.guard';
import {AdminOnlyGuard} from './authentication/admin-only.guard';

@NgModule({
    providers: [AuthGuard, AdminOnlyGuard],
    imports: [
        CommonModule
    ]
})
export class GuardsModule {
}
