export class Post {
  autore:string;
  testo:string;
  like:number;
  dislike:number;
  commenti:Commento[];

  constructor(autore, testo) {
    this.autore = autore;
    this.testo = testo;
    this.like = 0;
    this.dislike = 0;
    this.commenti = [];
  }

  addLike() {
    this.like += 1;
  }

  addDislike() {
    this.dislike += 1;
  }

  addCommento(autore, testo) {
    this.commenti.push(new Commento(autore, testo));
    return false;
  }
}

class Commento {
  autore:string;
  testo:string;

  constructor(autore, testo) {
    this.autore = autore;
    this.testo = testo;
  }
}