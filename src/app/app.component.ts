import { Component } from '@angular/core';
import { Post } from './post.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts:Post[] = [];

  inserisci(autore, testo) {
    this.posts.push(
      new Post(autore, testo)
    );
    return false; //evita il ricaricamento della pagina
  }
}
