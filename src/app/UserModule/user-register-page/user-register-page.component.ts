import { UserData } from './../../EntityInterfaces/UserData';
import { DataServiceService } from './../../Service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register-page',
  templateUrl: './user-register-page.component.html',
  styleUrls: ['./user-register-page.component.css']
})
export class UserRegisterPageComponent implements OnInit {

  public regForm : FormGroup;
  firstname  : string = ""
  lastname  : string = ""
  email  : string = ""
  phonenumber  : string = ""
  city  : string = ""
  state  : string = ""
  qualification  : string = ""
  yearofcompletion  : string = ""

  constructor(private route : Router, private formBuilder : FormBuilder, private dataService: DataServiceService) { 
    this.regForm = this.formBuilder.group(
      {
        firstname : ['', [Validators.required, Validators.minLength(1)]],
        lastname : ['', [Validators.required, Validators.minLength(1)]],
        email : ['', [Validators.required, Validators.minLength(10)]],
        phonenumber : ['', [Validators.required, Validators.minLength(10)]],
        city : ['', [Validators.required, Validators.minLength(3)]],
        state : ['', [Validators.required, Validators.minLength(1)]],
        qualification : ['', [Validators.required, Validators.minLength(4)]],
        yearofcompletion  : ['', [Validators.required, Validators.minLength(4)]],
        password : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)]]
      }
    );
  }

  ngOnInit(): void {
  }

  get forms() {
    return this.regForm.controls
  }

  register() : void {
    console.log("User Registered!")
    let user : UserData={
      "firstName":this.regForm.controls['firstname'].value,
      "lastName":this.regForm.controls['lastname'].value,
      "email":this.regForm.controls['email'].value,
      "password":this.regForm.controls['password'].value,
      "phonenumber":this.regForm.controls['phonenumber'].value,
      "city":this.regForm.controls['city'].value,
      "state":this.regForm.controls['state'].value,
      "qualification":this.regForm.controls['qualification'].value,
      "yearofpassing":this.regForm.controls['yearofcompletion'].value,
    }
    this.dataService.addUser(user).subscribe(
      (data)=>
      {
        console.log("Added ..successfully..Response recevied");
        this.route.navigate(['/users/loginpage']);
      }
    );
  }

}
