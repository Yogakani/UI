import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ActivateEmailComponent } from './activate-email/activate-email.component';

const routes: Routes = [
  {
    path : 'products',
    component: ProductsComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : RegistrationComponent
  },
  {
    path : 'accountVerification',
    component : AccountVerificationComponent
  },
  {
    path : 'activateEmail',
    component : ActivateEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
