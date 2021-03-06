import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {UserLayoutComponent} from './user-layout/user-layout.component';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {BlankLayoutComponent} from './blank-layout/blank-layout.component';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    AuthLayoutComponent,
    BlankLayoutComponent
  ],
  imports: [
    CommonModule,
    NgbAlertModule,
    RouterModule
  ]
})
export class LayoutsModule {
}
