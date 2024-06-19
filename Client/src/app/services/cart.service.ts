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

  voegTicketToe(ticket: Ticket, numberToAdd: number) {
    let ticketIndex = this.cartTickets.findIndex((t) => t.id === ticket.id);

    if (ticketIndex >= 0) {
      // If the ticket already exists, increase its quantity
      this.cartTickets[ticketIndex].quantity += numberToAdd;
    } else {
      // Otherwise, add the new ticket
      this.cartTickets.push({ ...ticket, quantity: numberToAdd });
    }
    //update locale storage
    this.updateCartInLS();
    numberToAdd = 1;
  }
  getTickets() {
    return this.cartTickets;
    this.updateCartInLS();
  }
  //increase where ticketindex.id == the ticket.id
  increaseQuantity(id: number) {
    let ticket = this.cartTickets.find((t) => t.id === id);
    if (ticket) {
      ticket.quantity++;
    }
    this.updateCartInLS();
  }
  //decrease where ticketindex.id == the ticket.id
  decreaseQuantity(id: number) {
    let ticket = this.cartTickets.find((t) => t.id === id);
    if (ticket) {
      if (ticket.quantity > 0) {
        ticket.quantity--;
      }
    }
    this.updateCartInLS();
  }
  //remove, the filter removes the ticket where the index.id == ticket.id, it only keeps the items in cartTickets where id doesn't match
  remove(ticket: Ticket) {
    this.cartTickets = this.cartTickets.filter((t) => t.id !== ticket.id);
    this.updateCartInLS();
  }
  //reduce adds the value of ticketprice to the accumulator
  getTotalPrice() {
    return this.cartTickets.reduce((acc, ticket) => {
      return acc + ticket.price * ticket.quantity;
    }, 0);
  }
  getTotalInCart(): number {
    return this.cartTickets.reduce((acc, ticket) => acc + ticket.quantity, 0);
  }
}
