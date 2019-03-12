import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.css']
})
export class MynavComponent {
sidenavWidth = 4;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  increase(){
    this.sidenavWidth = 10;
    console.log("increase sidenav width");
  }
  decrease(){
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }
}