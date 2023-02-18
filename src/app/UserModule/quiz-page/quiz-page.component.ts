import { QuestionService } from './../../Service/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  public name : string = ""
  public questionList : any = []
  public currentQuestion : number = 0
  public marks : number = 0
  counter = 60
  correctAns : number = 0
  incorrectAns : number = 0
  interval$ : any
  progress : string = "0"
  isQuizCompleted : Boolean = false
  tempFinishQuiz : number = 0
  temp : number = 0
  techName : string = ""
  isPassed : boolean = false

  constructor(private route : Router, private questionService : QuestionService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;          // this value will not be null that's why added '!'
    this.getAllQuestions()
    this.startCounter()
    this.router.queryParams.subscribe((params : any) => {
      this.techName = params.technology
    })
  }

  getAllQuestions() {   
    this.router.queryParams.subscribe((params : any) => {
      this.techName = params.technology 
    })
    console.log(`GetAllQuestions : ${this.techName}`)
    this.questionService.getQuestionJson(this.techName).subscribe(res => this.questionList = res.questions)
  }

  startNextLevel() {
    this.router.queryParams.subscribe((params : any) => {
      this.techName = params.technology
    })
    this.route.navigate(['/quiz/level2', this.techName], {queryParams : {technology:this.techName}})
  }

  nextQuestion() {
    this.currentQuestion++
  }

  prevQuestion() {
    this.currentQuestion--
  }

  answer(currentQ : number, option : any) {
    if(currentQ == this.questionList.length) {
      // this.isQuizCompleted = true
      this.finishQuiz()
      this.stopCounter()
    }

    if(option.correct) {
      this.marks += 10
      this.correctAns++
      setTimeout(() => {
        this.currentQuestion++
        this.resetCounter()
        this.getProgressPerc()
      }, 1000);
    }
    else {
      setTimeout(() => {
        this.incorrectAns++
        this.currentQuestion++
        this.resetCounter()
        this.getProgressPerc()
      }, 1000);
      this.marks -= 10
    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--; 
      if(this.counter==0) {
        this.currentQuestion++; 
        this.counter = 60; 
        this.marks -= 10
      }
    })
    setTimeout(() => {
      this.interval$.unsubscribe()
    }, 600000)
  }

  stopCounter() {
    this.interval$.unsubscribe()
    this.counter = 0
  }

  resetCounter() {
    this.stopCounter()
    this.counter = 60
    this.startCounter()
  }

  resetQuiz() {
    this.resetCounter()
    this.getAllQuestions()
    this.marks = 0
    this.counter = 60
    this.currentQuestion = 0
    this.progress = "0"
  }

  getProgressPerc() {
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString()
    return this.progress
  }

  finishQuiz() {
    this.isQuizCompleted = true
    window.alert("You have successfully completed the quiz, redirecting to the result page! Don't refresh or reload the page. Thank You!")
    this.temp = ((this.questionList.length)*10 - ((this.correctAns*10) + (this.incorrectAns*10)))
    this.marks -= this.temp                                                            // marks =  marks - (10 - (3*10 + 2*10))   == >   -40
  
    console.log(`${this.marks}`);
    
    if(this.marks >= 40) {
      console.log(`Passing the criteria`);
      this.isPassed = true
    }
    else
      console.log(`FAIL!`);
      
      
  }
}
