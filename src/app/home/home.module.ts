import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      LoginComponent,
      SignupComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class HomeModule { }