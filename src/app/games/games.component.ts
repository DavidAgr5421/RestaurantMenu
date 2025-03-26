import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    
  `,
  styles: ``
})
export class GamesComponent {
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
