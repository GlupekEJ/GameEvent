import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-betaalpagina',
  standalone: true,
  imports: [FormsModule, MatRadioModule, RouterLink],
  templateUrl: './betaalpagina.component.html',
  styleUrl: './betaalpagina.component.css',
})
export class BetaalpaginaComponent {
  paymentOptions!: string;
  paymentOption: string[] = ['Bancontact', 'Mastercard', 'VISA', 'PayPal'];
}
