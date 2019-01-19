import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FieldDefinition } from '../field-definitions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges,OnInit {
 
  @Input() vm :any;
  @Input() vmDefinition : Array<FieldDefinition>;
  @Input() operation:string;
  @Input() errorMessage: string;
  @Output() update:EventEmitter<any> = new EventEmitter();
  @Output() create:EventEmitter<any> = new EventEmitter();
  @Output() delete:EventEmitter<any> = new EventEmitter();
  
  form :FormGroup;
  status:string;
  submitted = false;
  vmCopy:any;
  constructor(private activatedRoute:ActivatedRoute, private route:Router,private location:Location) { }

  clearForm(){
    let group = {};
    this.vmCopy = Object.assign({},this.vm);
    this.vmDefinition.forEach(field=>{
      group[field.key] = field.required?new FormControl(this.vmCopy[field.key],Validators.required):new FormControl(this.vmCopy[field.key]);
    });
    this.form = new FormGroup(group);
  }

  ngOnInit() {
    this.clearForm();
    this.activatedRoute.params.subscribe(
      params=>{
        this.operation = params['operation'];
        this.clearForm();
      }
    );
  }

  ngOnChanges(cahnges:SimpleChanges){
    if(cahnges['errorMessage'].currentValue && this.status ==='Waiting'){
      this.status="";
    }
  }

  onBack(){
    this.errorMessage = null;
    this.location.back();
  }

  onCancel(){
    this.onBack();
  }

  onEdit(){
    this.route.navigate(['/authenticated/country-detail',this.activatedRoute.snapshot.params['id'],'edit']);
  }

  onDelete(){

  }

  onCreate(){
    this.submitted =true;
    if(this.form.valid){
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

  onSave(){
    this.submitted =true;
    if(this.form.valid){
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }
  }
}
