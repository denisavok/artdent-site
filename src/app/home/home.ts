import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  menuOpen = false;

  services = [
    {
      title: 'Stomatologie generala',
    },
    {
      title: 'Estetica dentara',
    },
    {
      title: 'Implantologie',
    },
    {
      title: 'Ortodontie',
    },
    {
      title: 'Stomatologie pediatrica',
    }
  ];

  programare(): void {
    console.log('Programare solicitata');
  }
}
