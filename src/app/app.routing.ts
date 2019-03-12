import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';


const appRoutes: Routes = [

    { path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
    { path: 'login', component: LoginComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '/home'},
];

export const routing = RouterModule.forRoot(appRoutes);