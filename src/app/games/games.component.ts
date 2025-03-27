import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Los juegos favoritos de {{username}}</h3>
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.name)"><a>{{game.name}}</a></li>
      }
    </ul>  
  `,
  styles: ``
})
export class GamesComponent {

  @Input() username = "";
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name : "Spiderman 2"
    },
    {
      id: 2,
      name : "Resident Evil 4 Remake"
    },
    {
      id: 3,
      name : "Dark Souls 3 Seamsless Coop"
    }

  ]
}
