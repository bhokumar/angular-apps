import { Component, OnInit } from '@angular/core';
import { Country } from '../view-model/country';
import { AppDataservice } from '../services/app.data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  allCountries:Array<Country>;
  count = 0;
  countries:Array<Country>;

  constructor(private dataService:AppDataservice,private route : ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getCountries().subscribe(
      countries=>{
        this.countries=countries;
        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    );

    this.route.params.subscribe(params=>{
      this.count = params['count'];
      this.updateList();
    });
  }

  

  updateList(){
      this.countries = this.count>0?this.allCountries.slice(0,this.count):this.allCountries;
  }

}
