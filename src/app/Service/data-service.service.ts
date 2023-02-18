import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../EntityInterfaces/UserData';
import { Questions } from '../EntityInterfaces/Questions';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  userUrl:string = 'http://localhost:9999/users';
  quesUrl:string = 'http://localhost:9888/questions'

  constructor(private http : HttpClient) { }

  addUser(userData : UserData) :Observable<any> {
    return this.http.post(`${this.userUrl}`, userData)
   }

  addQues(questions : Questions) :Observable<any> {
  return this.http.post(`${this.quesUrl}`, questions)
  }

  removeQues(qId : number) :Observable<any>{
    return this.http.delete(`${this.quesUrl}/${qId}`)
  }
}