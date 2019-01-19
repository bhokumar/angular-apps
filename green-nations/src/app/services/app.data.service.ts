import { Country } from "../view-model/country";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import { UserService } from "./user.service";

@Injectable()  
export class AppDataservice{
    countries:Array<Country>=[
        {id:1001,name:'Switzerland',epiIndex:87.67},
        {id:1002,name:'Luxemburg',epiIndex:83.29},
        {id:1003,name:'Austrailia',epiIndex:82.4},
        {id:1004,name:'Singapore',epiIndex:81.78},
        {id:1005,name:'Czech republic',epiIndex:81.47},
        {id:1006,name:'Germany',epiIndex:80.47},
        {id:1007,name:'Spain',epiIndex:79.09},
        {id:1008,name:'Austria',epiIndex:78.32},
        {id:1009,name:'Sweden',epiIndex:78.09},
        {id:1010,name:'Norway',epiIndex:78.04},
    ];

    constructor(private userService:UserService){}

    createCountry(vm:Country):Observable<any>{
        let id = 0;
        this.countries.forEach(c=>{if(c.id>=id)id=c.id+1});
        vm.id = id;
        this.countries.push(vm);
        return Observable.of(vm);
    }

    deleteCountry(id:number):Observable<any>{
        return Observable.of(this.countries);
        //return Observable.of({}).do(e=>this.countries.splice(this.countries.findIndex(c=>c.id==id),1));
        //.do(e=>this.countries.splice(this.countries.findIndex(c=>c.id==id),1);
    }

    getCountries():Observable<any>{
        return Observable.of(this.countries);
    }

    getCountry(id:number):Observable<any>{
        var country = this.countries.find(c=>c.id==id);
        return Observable.of(country);
    }
}