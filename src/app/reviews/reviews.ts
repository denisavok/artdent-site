import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {

  reviews = [
    {
      name: 'Maria P.',
      text: 'O experienta foarte placuta. Personal amabil si servicii de calitate.'
    },
    {
      name: 'Andrei M.',
      text: 'Foarte multumit de serviciile oferite.'
    },
    {
      name: 'Elena C.',
      text: 'Profesionalism si atentie acordata fiecarui pacient.'
    }
  ,
   {
      name: 'Elena C.',
      text: 'Profesionalism si atentie acordata fiecarui pacient.'
    },
     {
      name: 'Elena C.',
      text: 'Profesionalism si atentie acordata fiecarui pacient.'
    }
  ];

}