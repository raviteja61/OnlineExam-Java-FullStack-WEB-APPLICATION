import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  
  email : string = ""
  password : string = ""

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }

  goToExamPage() {
    this.router.navigate(['/exampage'])
  }
}
