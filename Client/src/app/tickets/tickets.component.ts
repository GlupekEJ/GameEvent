import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {

  
  cartService = inject(CartService);
  tickets: any[] = [
    {
      name: 'Dag Ticket',
      description: ` Toegang tot de beurs voor één specifieke dag.
         Mogelijkheid om deel te nemen aan alle algemene activiteiten en evenementen die plaatsvinden op die dag.
         Toegang tot bepaalde exclusieve presentaties, demo's of panels die alleen beschikbaar zijn op die dag.`,
      price: 30,
      id: 1,
      className: 'dag1',
      className2: 'dag',
    },
    {
      name: 'Weekend Ticket',
      description: ` - Toegang tot de beurs gedurende het hele weekend, inclusief alle dagen
        waarop het evenement plaatsvindt.
      
      
        - Meer flexibiliteit om alle exposities, activiteiten en evenementen op
        verschillende dagen te verkennen.
      
      
        - Speciale weekend-specifieke activiteiten of optredens die exclusief
        zijn voor weekendticket-houders.`,

      price: 50,
      id: 2,
      className: 'week1',
      className2: 'week',
    },
  ];
  voegToe(ticket: any) {
    this.cartService.voegTicketToe(ticket);
    console.log('added');
  }
}
