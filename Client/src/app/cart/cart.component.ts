import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);
}
