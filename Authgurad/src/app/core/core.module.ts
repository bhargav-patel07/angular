import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AuthService } from './service/auth.service';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { UserGuard } from './guard/user.guard';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      enableHtml: true,
          }),
  
  ],
  providers:[
    AuthGuardGuard,
    AuthService,
    CanDeactivateGuard,
    UserGuard
  ],
  exports: [
    HeaderNavbarComponent,
    ReactiveFormsModule,
FooterComponent
  ]
})
export class CoreModule { }
