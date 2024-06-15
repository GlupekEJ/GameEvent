import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticketbetaalpagina',
  standalone: true,
  imports: [FormsModule, MatRadioModule, RouterLink],
  templateUrl: './ticketbetaalpagina.component.html',
  styleUrl: './ticketbetaalpagina.component.css',
})
export class TicketBetaalpaginaComponent {
  paymentOptions!: string;
  paymentOption: string[] = ['Bancontact', 'Mastercard', 'VISA', 'PayPal'];
}
