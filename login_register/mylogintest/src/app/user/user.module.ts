import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UserRoutingModule } from './user.router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule, UserRoutingModule, FormsModule, HttpModule
  ],
  declarations: [LoginComponent, RegisterComponent, UserComponent],
  providers: [UserService]
})
export class UserModule { }
