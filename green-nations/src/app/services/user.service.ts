import { UserApi } from "../../fw/users/user-api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class UserService implements UserApi{
    isAuthenticated =false;
    constructor(private router:Router){}
    signIn(userName:string,password:string,rememberMe:boolean):Observable<any>{
        console.log('User Signing In : '+userName+' with Password : '+password+' Remember me status: '+rememberMe);
        this.isAuthenticated = true;
        return Observable.of({});
    }
    signOut():Observable<any>{
        this.isAuthenticated = false;
        this.router.navigate(['signIn']);
        return Observable.of({});
    }
}