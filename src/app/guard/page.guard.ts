import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class PageGuard implements CanActivate {
    constructor(public router: Router) { }

    canActivate(): boolean {
        debugger
        if (!this.getCredential()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    public getCredential(): string {
        return localStorage.getItem('isLogin');
    } 
}