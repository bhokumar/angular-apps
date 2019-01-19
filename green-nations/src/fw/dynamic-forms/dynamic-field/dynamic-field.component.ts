import { Component, OnInit, Input } from '@angular/core';
import { FieldDefinition } from '../field-definitions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  @Input() field:FieldDefinition;
  @Input() form:FormGroup;
  @Input() operation :string;
  @Input() submitted: boolean; 

  get isInvalid(){return this.form.controls[this.field.key].valid;}
  constructor() { }

  ngOnInit() {
  }

}
