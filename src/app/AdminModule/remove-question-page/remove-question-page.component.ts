import { DataServiceService } from './../../Service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-question-page',
  templateUrl: './remove-question-page.component.html',
  styleUrls: ['./remove-question-page.component.css']
})
export class RemoveQuestionPageComponent implements OnInit {

  public removeQuesPage : FormGroup;
  tech_drop : string = ""
  qId : number = 0

  constructor(private route: Router, private formBuilder : FormBuilder, private dataService : DataServiceService) { 
    this.removeQuesPage = this.formBuilder.group(
      {
        tech_drop : ['', [Validators.required]],
        qId : ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    this.qId = this.removeQuesPage.controls['qId'].value
  }

  get removeQues() {
    return this.removeQuesPage.controls

  }

  ques_removed() {
    console.log(this.removeQuesPage.value)
    this.dataService.removeQues(this.removeQuesPage.controls['qId'].value).subscribe(
      (data) =>
      {
        console.log("Question Deleted!");
        this.route.navigate(['/admin-profile']);
      }
    )
  }
}
