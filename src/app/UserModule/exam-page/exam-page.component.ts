import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

  techName : String = ""

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToJavaInstructions() {
    this.techName = "JAVA"
    this.route.navigate(['/java/instruction'], {queryParams : {technology:this.techName}})
  }

  goToSQLInstructions() {
    this.techName = "SQL"
    this.route.navigate(['/sql/instruction'], {queryParams : {technology:this.techName}})
  }

  goToPHPInstructions() {
    this.techName = "PHP"
    this.route.navigate(['/php/instruction'], {queryParams : {technology:this.techName}})
  }

  goToCPPInstructions() {
    this.techName = "CNCPP"
    this.route.navigate(['/cncpp/instruction'], {queryParams : {technology:this.techName}})
  }

  goToPythonInstructions() {
    this.techName = "PYTHON"
    this.route.navigate(['/python/instruction'], {queryParams : {technology:this.techName}})
  }

  goToCnetInstructions() {
    this.techName = "CNET"
    this.route.navigate(['/cnet/instruction'], {queryParams : {technology:this.techName}})
  }

}
