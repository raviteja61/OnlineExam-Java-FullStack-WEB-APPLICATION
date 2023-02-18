import { DataServiceService } from './../../Service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question-page',
  templateUrl: './add-question-page.component.html',
  styleUrls: ['./add-question-page.component.css']
})
export class AddQuestionPageComponent implements OnInit {

  public addQuesPage : FormGroup

  questionText : string = ""
  option1 : string = ""
  option2 : string = ""
  option3 : string = ""
  option4 : string = ""
  answer : string = ""

  constructor(private route: Router, private formBuilder : FormBuilder, private dataService : DataServiceService)  { 
    this.addQuesPage = this.formBuilder.group(
      {
        questionText : ['', [Validators.required]],
        option1 : ['', [Validators.required, Validators.min(1)]],
        option2 : ['', [Validators.required, Validators.min(1)]],
        option3 : ['', [Validators.required, Validators.min(1)]],
        option4 : ['', [Validators.required, Validators.min(1)]],
        answer : ['', [Validators.required, Validators.min(1)]]
      }
    )
  }

  ngOnInit(): void {
    
  }

  get addQues() {
    return this.addQuesPage.controls
  }

  ques_added() : void {
    console.log(this.addQuesPage.value)
    this.dataService.addQues(this.addQuesPage.value).subscribe(
      (data)=>
      {
        console.log("Question Added Successfully!");
        this.route.navigate(['/admin-profile']);
      }
    );
  }

}
