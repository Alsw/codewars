import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';


const UserRoutes: Routes = [
    { path: 'login', component: UserLoginComponent },
    { path: 'register', component: UserRegisterComponent },
];

export class UserRoutingModule { }
