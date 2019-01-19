import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataservice } from '../services/app.data.service';
import { Country } from '../view-model/country';
import { FieldDefinition } from '../../fw/dynamic-forms/field-definitions';

@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  errorMessage: string;
  operation = 'details';
  country:Country;

  countryDefinition:Array<FieldDefinition> = [
    {
      key:'id',
      type:'number',
      isId:true,
      label:'id',
      required:true
    },
    {
      key:'name',
      type:'string',
      isId:false,
      label:'Country Name',
      required:true
    },
    {
      key:'epiIndex',
      type:'number',
      isId:false,
      label:'EPI Index',
      required:true
    }
  ];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private dataService:AppDataservice) {}

  createCountry(country:Country){
    country.id =0;
    this.errorMessage =null;
    this.dataService.createCountry(country).subscribe(
      c=> this.router.navigate(['/authenticated/country-maint']),
      err=>this.errorMessage = 'Error creating country'
    );
  }

  updateCountry(country:Country){
    country.id =0;
    this.errorMessage =null;
    this.dataService.createCountry(country).subscribe(
      c=> this.router.navigate(['/authenticated/country-maint']),
      err=>this.errorMessage = 'Error creating country'
    );
  }

  ngOnInit() {
    this.operation = this.activatedRoute.snapshot.params['operation'];
    if(this.operation=='create'){
      this.country = {id:0,name:'',epiIndex:null};
    }else{
      this.dataService.getCountry(this.activatedRoute.snapshot.params['id'])
      .subscribe(country=>this.country = country);
    }
  }

}

