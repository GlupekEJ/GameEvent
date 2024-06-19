import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Ticket } from '../models/Ticket';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-basket',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cart-basket.component.html',
  styleUrl: './cart-basket.component.css',
})
export class CartBasketComponent {
  cartTickets: Ticket[] = [];
  constructor(public cartService: CartService) {}
  removeFromCart(ticket: Ticket) {
    this.cartService.remove(ticket);
  }
}
