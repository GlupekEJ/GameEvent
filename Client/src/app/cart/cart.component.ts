import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Ticket } from '../models/Ticket';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);

  removeFromCart(ticket: Ticket) {
    this.cartService.remove(ticket);
  }
}
