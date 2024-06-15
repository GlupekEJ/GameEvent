import { Injectable } from '@angular/core';

import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartTickets: Ticket[] = JSON.parse(
    localStorage.getItem('cartTickets') || '[]'
  );

  constructor() {}
  updateCartInLS() {
    localStorage.setItem('cartTickets', JSON.stringify(this.cartTickets));
  }

  voegTicketToe(ticket: Ticket) {
    let ticketIndex = this.cartTickets.findIndex((t) => t.id === ticket.id);
    if (ticketIndex >= 0) {
      // If the ticket already exists, increase its quantity
      this.cartTickets[ticketIndex].quantity++;
    } else {
      // Otherwise, add the new ticket
      this.cartTickets.push({ ...ticket, quantity: 1 }); // Assuming your Ticket class has a quantity property initialized to 1
    }
    this.updateCartInLS();
  }
  getTickets() {
    return this.cartTickets;
    this.updateCartInLS();
  }

  increaseQuantity(id: number) {
    let ticket = this.cartTickets.find((t) => t.id === id);
    if (ticket) {
      ticket.quantity++;
    }
    this.updateCartInLS();
  }

  decreaseQuantity(id: number) {
    let ticket = this.cartTickets.find((t) => t.id === id);
    if (ticket) {
      ticket.quantity--;
    }
    this.updateCartInLS();
  }

  remove(ticket: Ticket) {
    this.cartTickets = this.cartTickets.filter((t) => t.id !== ticket.id);
    this.updateCartInLS();
  }

  getTotalPrice() {
    return this.cartTickets.reduce((acc, ticket) => {
      return acc + ticket.price * ticket.quantity;
    }, 0);
  }
}
