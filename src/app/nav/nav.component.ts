import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  goToUserHome() {
    this.route.navigate(['/','user-home']);
  }
}
