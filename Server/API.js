export class API {
  constructor(author, comment) {
    this.author = author;
    this.comment = comment;
  }

  author = "Erik";
  comment = "Lars is king";

  getInfo() {
    return `Author:${this.author} Comment:${this.comment} `;
  }
}
