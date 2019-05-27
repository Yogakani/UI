import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginService } from './login/login.service';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { AccountVerifyService } from './account-verification/account-verification.service';
import { ActivateEmailComponent } from './activate-email/activate-email.component';
import { ActivateEmailService } from './activate-email/activate-email.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    RegistrationComponent,
    AccountVerificationComponent,
    ActivateEmailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, RegistrationService, AccountVerifyService, ActivateEmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
