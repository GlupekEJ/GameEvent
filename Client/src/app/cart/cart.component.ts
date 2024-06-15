import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';

import { Ticket } from '../models/Ticket';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public cartService: CartService) {
    this.cartService = cartService;
  }
  removeFromCart(ticket: Ticket) {
    this.cartService.remove(ticket);
  }
}
