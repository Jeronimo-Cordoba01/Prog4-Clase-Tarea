import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html'
})
export class Card {

  titulo = input<string>();
  subtitulo = input<string>();
  imagen = input<string>();
  link = input<string>();
}