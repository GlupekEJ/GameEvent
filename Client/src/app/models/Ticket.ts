export class Ticket {
  //static #lastId: number = 0;
  id: number;
  name: string;
  description: string;
  price: number;
  className: string;
  className2: string;
  quantity: number;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    classname: string,
    classname2: string,
    quantity: number = 1
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.className = classname;
    this.className2 = classname2;
    this.quantity = quantity;
  }
}
