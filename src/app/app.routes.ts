import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent}
];
