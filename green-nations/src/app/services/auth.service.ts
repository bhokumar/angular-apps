import { CanActivate, Router, CanActivateChild } from "@angular/router";
import { UserService } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private userService :UserService, private router:Router){

    }

    canActivate():boolean{
        console.log('AuthGuard # can activate called'+this.userService.isAuthenticated);
        if(!this.userService.isAuthenticated){
            console.log('Not authenticated!');
            this.router.navigate(['/signIn']);
        }
        return this.userService.isAuthenticated;
    }

    canActivateChild():boolean{
        return this.canActivate();
    }
}