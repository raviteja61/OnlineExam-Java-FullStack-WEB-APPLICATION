import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public logForm : FormGroup;
  email  = ''
  password = ''

  constructor(private formBuilder : FormBuilder, private router:Router, private http : HttpClient) { 
    this.logForm = this.formBuilder.group(
      {
        email : ['', [Validators.required, Validators.minLength(10)]],
        password : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)]]
      }
    );
  }

  ngOnInit(): void {
  }

  get forms() {
    return this.logForm.controls
  }

  login(){
    this.http.get<any>("http://localhost:9999/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.logForm.value.email && a.password === this.logForm.value.password
      });
      if(user){
        alert('Login Successful!');
        this.logForm.reset()
      this.router.navigate(["user-home"])
      }else{
        alert("User Not Found! ")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

}
