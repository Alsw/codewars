import { Injectable } from '@angular/core';
@Injectable()

export class UserModel {
    id: number;
    userName: string;
    password: string;
    isRemeberMe: boolean;
    email: string;
    confirmPassword: string;
    vcode: string;
}
