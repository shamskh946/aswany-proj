import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Restaurants } from '../../models/restaurants';
import { Category } from '../../models/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {


  // ctgry: Category[] =[
  //   new Category(1, 'All'),
  //   new Category(2, 'Cafes'),
  //   new Category(3, 'Restaurants'),
  // ]

  rest: Restaurants[] = [];

  constructor(){
    this.rest = [
      { name: "The Terrace" ,description:"retaurante" , imgurl:"../images/the-terrace.jpg",categoryid: 3, rating: "⭐️⭐️⭐️" },
      { name: "Aswani Restaurant" ,description:"retaurante" , imgurl:"../images/aswani res.jpg",categoryid: 3, rating: "⭐️⭐️⭐️⭐️⭐️" },
      { name: "1902 Restaurant" ,description:"retaurante" , imgurl:"../images/1902 res.jpg",categoryid: 3, rating: "⭐️⭐️⭐️⭐️" },
      { name: "Kato Dol Nubian" ,description:"retaurante" , imgurl:"../images/cato dool.jpg",categoryid: 3, rating: "⭐️⭐️⭐️⭐️" },
      { name: "Mezze Restaurant" ,description:"retaurante" , imgurl:"../images/mezze-restaurant.jpg",categoryid: 3, rating: "⭐️⭐️⭐️⭐️" },
      { name: "Al Qahwa Cafe" ,description:"cafe" , imgurl:"../images/al-qahwa cafe.jpg",categoryid: 2, rating: "⭐️⭐️⭐️" },
      { name: "Rich" ,description:"cafe" , imgurl:"../images/rich.jpg",categoryid: 2, rating: "⭐️⭐️⭐️⭐️" },
      { name: "Aswan moon" ,description:"cafe" , imgurl:"../images/aswan-moon.jpg",categoryid: 2, rating: "⭐️⭐️⭐️⭐️" },
      { name: "subway cafe" ,description:"cafe" , imgurl:"../images/Subway.jpg",categoryid: 2, rating: "⭐️⭐️⭐️⭐️" },
    ];
  }

}
