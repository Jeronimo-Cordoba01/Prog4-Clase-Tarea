import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  titulo = input<string>();
  subtitulo = input<string>();
  imagen = input<string>();
  link = input<string>();
}
