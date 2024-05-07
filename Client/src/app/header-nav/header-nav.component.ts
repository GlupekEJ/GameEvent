import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  burgerDisplay: boolean = false;
  displayBurgerNav() {
    this.burgerDisplay = !this.burgerDisplay;
  }
}
