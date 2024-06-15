import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BezoekLarsComponent } from './bezoek-lars/bezoek-lars.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { StandhoudersComponent } from './standhouders/standhouders.component';
import { ContactComponent } from './contact/contact.component';
import { FormulierStandhoudersComponent } from './formulier-standhouders/formulier-standhouders.component';
import { CartComponent } from './cart/cart.component';
import { BetaalpaginaComponent } from './betaalpagina/betaalpagina.component';
import { BetalingGeslaagdComponent } from './betaling-geslaagd/betaling-geslaagd.component';
import { TicketBetaalpaginaComponent } from './ticketbetaalpagina/ticketbetaalpagina.component';
import { TicketbetalingokComponent } from './ticketbetalingok/ticketbetalingok.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'bezoek-Lars', component: BezoekLarsComponent },
  { path: 'floorplan', component: FloorplanComponent },
  { path: 'standhouders', component: StandhoudersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formulier-standhouders', component: FormulierStandhoudersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'betaalpagina', component: BetaalpaginaComponent },
  { path: 'betaling-geslaagd', component: BetalingGeslaagdComponent },
  { path: 'ticketbetaalpagina', component: TicketBetaalpaginaComponent },
  { path: 'ticketbetalingok', component: TicketbetalingokComponent },
];
