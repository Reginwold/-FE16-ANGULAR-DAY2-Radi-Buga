import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title:string = "CarRental Project"


  
  add10: number = 10;
  addSum() {
    this.add10 = this.add10 + 10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
