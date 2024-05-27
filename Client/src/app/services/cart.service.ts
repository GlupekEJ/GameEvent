import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartTickets: any[] = JSON.parse(
    localStorage.getItem('cartTickets') || '[]'
  );

  constructor() {}
  updateCartInLS() {
    localStorage.setItem('cartTickets', JSON.stringify(this.cartTickets));
  }

  voegTicketToe(ticket: any) {
    this.cartTickets.push(ticket);
    this.updateCartInLS();
  }
  getTickets() {
    return this.cartTickets;
    this.updateCartInLS();
  }
}
