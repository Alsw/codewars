import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserService } from './user.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserLoginComponent, UserRegisterComponent],
  providers: [UserService]
})
export class UserModule { }
