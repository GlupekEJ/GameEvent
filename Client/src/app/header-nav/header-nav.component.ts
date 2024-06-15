import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CartBasketComponent } from '../cart-basket/cart-basket.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CartBasketComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  burgerDisplay: boolean = false;
  displayBurgerNav() {
    this.burgerDisplay = !this.burgerDisplay;
  }

  cartDisplay: boolean = false;
  displayCart() {
    this.cartDisplay = !this.cartDisplay;
    console.log('cart clicked');
  }

  constructor(public cartService: CartService) {
    this.cartService = cartService;
  }

  getCartCount(): number {
    return this.cartService.getTotalInCart();
  }
}
