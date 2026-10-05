import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
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
