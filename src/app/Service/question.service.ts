import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  quizUrl : string = 'http"//localhost:9999/questions'

  constructor(private http : HttpClient) { }

  getQuestionJson(techName : string): Observable<any> {
    console.log(`${techName}`)
    return this.http.get<any>(`assets/${techName}.json`);
  }

  getLev2QuestionJson(techName : string): Observable<any> {
    console.log(`${techName}`)
    return this.http.get<any>(`assets/${techName}_Lev2.json`);
  }

  getLev3QuestionJson(techName : string): Observable<any> {
    console.log(`${techName}`)
    return this.http.get<any>(`assets/${techName}_Lev3.json`);
  }
}