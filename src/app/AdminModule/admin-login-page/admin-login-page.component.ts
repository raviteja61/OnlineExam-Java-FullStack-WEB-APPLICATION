import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  public logForm : FormGroup
    email  : string = ""
    password : string = ""

  constructor(private router : Router, private formBuilder : FormBuilder, private http : HttpClient) { 
    this.logForm = this.formBuilder.group(
      {
        email : ['',[Validators.required, Validators.email]],
        password : ['',[Validators.required,Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)]]
    });
  }

  ngOnInit(): void {
  }

  get forms(){
    return this.logForm.controls
  }

  login(){
    this.http.get<any>("http://localhost:9888/admins")  
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.adminEmailId === this.logForm.value.email && a.adminPassword === this.logForm.value.password 
      });
      if(user){
        alert('Admin Login Successful!');
        this.logForm.reset()
      this.router.navigate(["admin-profile"])
      }else{
        alert("Admin Not Found! ")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

}