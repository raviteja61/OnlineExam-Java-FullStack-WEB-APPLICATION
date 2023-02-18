import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table-data-page',
  templateUrl: './student-table-data-page.component.html',
  styleUrls: ['./student-table-data-page.component.css']
})
export class StudentTableDataPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

