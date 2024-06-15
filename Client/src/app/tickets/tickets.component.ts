import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

import { Ticket } from '../models/Ticket';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  tickets: Ticket[] = [
    new Ticket(
      1,
      'Dag Ticket',
      ` Toegang tot de beurs voor één specifieke dag.
         Mogelijkheid om deel te nemen aan alle algemene activiteiten en evenementen die plaatsvinden op die dag.
         Toegang tot bepaalde exclusieve presentaties, demo's of panels die alleen beschikbaar zijn op die dag.`,
      30,
      'dag1',
      'dag'
    ),
    new Ticket(
      2,
      'Weekend Ticket',
      ` - Toegang tot de beurs gedurende het hele weekend, inclusief alle dagen
        waarop het evenement plaatsvindt.
      
      
        - Meer flexibiliteit om alle exposities, activiteiten en evenementen op
        verschillende dagen te verkennen.
      
      
        - Speciale weekend-specifieke activiteiten of optredens die exclusief
        zijn voor weekendticket-houders.`,
      50,
      'week1',
      'week'
    ),
    new Ticket(
      3,
      'VIP-Ticket',
      ` Alle voordelen van het weekendticket, plus:
      
      
         - Voorrangstoegang tot de beursvloer en andere populaire attracties,
      waardoor lange wachtrijen worden vermeden.
      
      
        - Toegang tot exclusieve VIP-ruimtes met gratis hapjes, drankjes en
      comfortabele zitplaatsen.`,
      70,
      'vip1',
      'vip'
    ),
  ];

  constructor(public cartService: CartService) {
    this.cartService = cartService;
  }
  voegToe(ticket: Ticket) {
    this.cartService.voegTicketToe(ticket);
    console.log('added');
  }
}
