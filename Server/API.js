export class API {
    constructor(author,comment){
        this.author = author;
        this.comment = comment;
    }

    getInfo(){
        return `Author:${this.author} Comment:${this.comment} `
    }
}