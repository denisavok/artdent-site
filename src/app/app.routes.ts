import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { AppointmentPage } from './appointment-page/appointment-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'acasa',
    pathMatch: 'full'
  },
  {
    path: 'acasa',
    component: Home
  },
  {
    path: 'servicii',
    component: Services
  },
  {
    path: 'despre',
    component: About
  }, 
  {
    path: 'contact',
    component: Contact
  }, 
  {
    path: 'programare',
    component: AppointmentPage
  }
];