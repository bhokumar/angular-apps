import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserApi } from '../user-api';
import { Router } from '@angular/router';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    submitting = false;
    formError = null;
  constructor(private userApi:UserApi,
              private router :Router) { }

  ngOnInit() {
  }
  
  onSubmit(signInForm:NgForm):void{
    console.log('Submit clicked!');
    console.log(signInForm);
    if(signInForm.valid){
    this.submitting = true;
    this.formError = null;
    this.userApi.signIn(signInForm.value.username,signInForm.value.password,signInForm.value.rememberMe)
    .subscribe((data) => {
      console.log('Got valid : '+data);
      this.router.navigate(['/authenticated']);
    },(error) => {
      this.submitting = false;
      console.log('Error : '+error);
      this.formError = error;
    });
  }
  }
}
