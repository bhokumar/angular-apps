import { Component, OnInit } from '@angular/core';
import { Country } from '../view-model/country';
import { AppDataservice } from '../services/app.data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {
  countries:Array<Country>;
  deleteError:string;
  deletedId:number;
  isDeleting = false;

  constructor(private dataService:AppDataservice,
              private router:Router) {
                
              }

              showCountryDetail(id:number){
                this.router.navigate(['/authenticated/country-detail',id,'details']);
              }

              editCountry(id:number){
                this.router.navigate(['/authenticated/country-detail',id,'edit']);
              }

              deleteCountryQuestion(id:number){
                this.deleteError = null;
                this.deletedId =id;
                //this.router.navigate(['/authenticated/country-detail',id,'delete']);
              }

              createCountry(){
                this.router.navigate(['/authenticated/country-detail',0,'create']);
              }

              deleteCountry(id:number){
                this.isDeleting =true;
                this.dataService.deleteCountry(id).subscribe(
                  c=>this.cancelDelete(),
                  err=> {this.deleteError=err;this.isDeleting=false}
                );
              }

              cancelDelete(){
                this.isDeleting = false;
                this.deletedId = null;
              }

  ngOnInit() {
    this.dataService.getCountries().subscribe(data=>this.countries = data);
  }

}
