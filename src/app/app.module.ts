import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionPageComponent } from './AdminModule/add-question-page/add-question-page.component';
import { RemoveQuestionPageComponent } from './AdminModule/remove-question-page/remove-question-page.component';
import { SearchStudentPageComponent } from './AdminModule/search-student-page/search-student-page.component';
import { StudentTableDataPageComponent } from './AdminModule/student-table-data-page/student-table-data-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { QuizPageComponent } from './UserModule/quiz-page/quiz-page.component';
import { InstructionPageComponent } from './UserModule/instruction-page/instruction-page.component';
import { ChangeBgDirective } from './change-bg.directive';
import { LoginPageComponent } from './UserModule/login-page/login-page.component';
import { ExamPageComponent } from './UserModule/exam-page/exam-page.component';
import { AdminLoginPageComponent } from './AdminModule/admin-login-page/admin-login-page.component';
import { UserHomePageComponent } from './UserModule/user-home-page/user-home-page.component';
import { AdminProfilePageComponent } from './AdminModule/admin-profile-page/admin-profile-page.component';
import { UserRegisterPageComponent } from './UserModule/user-register-page/user-register-page.component';
import { NavComponent } from './nav/nav.component';
import { ResetPasswordComponent } from './UserModule/reset-password/reset-password.component';
import { QuizPage2Component } from './UserModule/quiz-page2/quiz-page2.component';
import { QuizPage3Component } from './UserModule/quiz-page3/quiz-page3.component';
import { AboutUsComponent } from './AdminModule/about-us/about-us.component';

const routes : Route[] = [
  {
    path : "user-home",
    component : UserHomePageComponent 
  },
  {
    path:"users/loginpage",
    component: LoginPageComponent
  },
  {
    path : "reset-password",
    component : ResetPasswordComponent
  },
  {
    path : "search-student",
    component : SearchStudentPageComponent
  },
  {
    path : "add-question",
    component : AddQuestionPageComponent
  },
  {
    path : "remove-question",
    component : RemoveQuestionPageComponent
  },
  {
    path : "student-table",
    component : StudentTableDataPageComponent
  },
  {
    path : "java/instruction",
    component : InstructionPageComponent
  },
  {
    path : "sql/instruction",
    component : InstructionPageComponent
  },
  {
    path : "php/instruction",
    component : InstructionPageComponent
  },
  {
    path : "python/instruction",
    component : InstructionPageComponent
  },
  {
    path : "cncpp/instruction",
    component : InstructionPageComponent
  },
  {
    path : "cnet/instruction",
    component : InstructionPageComponent
  },
  // {
  //   path : "quiz",
  //   component : QuizPageComponent
  // },
  {
    path : 'quiz/level1/:tech',
    component : QuizPageComponent
  },
  {
    path : 'quiz/level2/:tech',
    component : QuizPage2Component
  },
  {
    path : 'quiz/level3/:tech',
    component : QuizPage3Component
  },
  // {
  //   path : '', redirectTo : 'user-home', pathMatch : "full"
  // },
  {
    path : "admin-profile",
    component : AdminProfilePageComponent
  },
  {
    path : "admin-login",
    component : AdminLoginPageComponent
  },
  {
    path:"exampage",
    component: ExamPageComponent
  },
  {
    path:"registrationform",
    component: UserRegisterPageComponent
  },
  {
    path : "nav",
    component: NavComponent
  },
  {
    path : "aboutUs", 
    component : AboutUsComponent
  }
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionPageComponent,
    RemoveQuestionPageComponent,
    SearchStudentPageComponent,
    StudentTableDataPageComponent,
    QuizPageComponent,
    InstructionPageComponent,
    ChangeBgDirective,
    LoginPageComponent,
    ExamPageComponent,
    AdminLoginPageComponent,
    UserHomePageComponent,
    AdminProfilePageComponent,
    UserRegisterPageComponent,
    NavComponent,
    ResetPasswordComponent,
    QuizPage2Component,
    QuizPage3Component,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
