import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { IProduct } from "../interfaces/IProduct";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService{
    constructor(private _httpClient:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this._httpClient.get<IProduct[]>("http://orders-orders.193b.starter-ca-central-1.openshiftapps.com/products")
                                    .do(data=>console.log(JSON.stringify(data)))
                                    .catch(this.handleError);
    }

    private handleError(error:HttpErrorResponse){
        console.log(error.message);
        return Observable.throw(error.message);
    }
}