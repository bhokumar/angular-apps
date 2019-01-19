import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export abstract class UserApi {
    constructor(parameters) {
        
    }

    signIn : (userName:string,password:string,rememberMe:boolean)=>Observable<any>;
    signOut:()=>Observable<any>;
}