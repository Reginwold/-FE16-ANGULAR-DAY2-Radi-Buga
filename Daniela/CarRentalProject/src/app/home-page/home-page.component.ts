import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  cars: Array< {name: string, year: number, image: string}> = [{
    name: 'BMW 8 Series',
    year: 2018,
    image: '/assets/image1.jpg'
  },{
    name: 'Toyota Highlander',
    year: 2001,
    image: '/assets/image2.jpg'
  },{
    name: 'Maserati Spyder',
    year: 2002,
    image: 'assets/image3.jpg'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
