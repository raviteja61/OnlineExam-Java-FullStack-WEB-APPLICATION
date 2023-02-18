import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent implements OnInit {

  @ViewChild('name') 
  nameKey!: ElementRef

  techName : String = ""
  tech : string = "";
  
  constructor(private route : Router, private router : ActivatedRoute) { 
    this.router.queryParams.subscribe((params : any) => {
      this.techName = params.technology
    })
  }

  ngOnInit(): void {
  }

  startQuiz() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
    this.route.navigate(['/quiz/level1', this.tech], {queryParams : {technology:this.techName}})
  }

}
