import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BezoekLarsComponent } from './bezoek-lars/bezoek-lars.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { StandhoudersComponent } from './standhouders/standhouders.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'bezoek-Lars', component: BezoekLarsComponent },
  { path: 'floorplan', component: FloorplanComponent },
  { path: 'standhouders', component: StandhoudersComponent },
  { path: 'contact', component: ContactComponent },
];
