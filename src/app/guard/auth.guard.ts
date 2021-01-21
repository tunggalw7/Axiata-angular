import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public router: Router) { }

    canActivate(): boolean {
        if (this.getCredential()) {
            this.router.navigate(['dashboard/all-tickets']);
            return false;
        }
        return true;
    }

    public getCredential(): string {
        return localStorage.getItem('isLogin');
    } 
}