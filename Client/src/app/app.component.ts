import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { CartBasketComponent } from './cart-basket/cart-basket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderNavComponent,
    FooterComponent,
    CartBasketComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AELiantie';
}
