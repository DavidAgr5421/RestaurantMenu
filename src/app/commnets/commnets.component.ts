import { Component } from '@angular/core';

@Component({
  selector: 'app-commnets',
  imports: [],
  template: `
    <h3>
      THIS IS FINE MEME AAAAAAA
    </h3>
    <img alt="meme" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPCcEUg7XO2sqnqYibCTPqyUNVK9rTSt1Mg&s">
    <p>
      Homero DOU homero Cerveza!
    </p>
  `,
  styles: `
    h3, p{
    text-align: center;
    }
  img{
    width: 100%;
    height: auto;
  }
  `
})
export class CommnetsComponent {

}
