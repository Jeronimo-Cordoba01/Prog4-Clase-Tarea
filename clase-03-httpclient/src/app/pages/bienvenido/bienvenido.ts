import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [Card],
  templateUrl: './bienvenido.html'
})
export class Bienvenido {

  cards = [
    {
      titulo: 'Angular',
      subtitulo: 'Framework',
      imagen: 'https://angular.io/assets/images/logos/angular/angular.png',
      link: 'https://angular.io'
    },
    {
      titulo: 'Ionic',
      subtitulo: 'Mobile',
      imagen: 'https://ionicframework.com/img/meta/ionic-framework-og.png',
      link: 'https://ionicframework.com'
    },
    {
      titulo: 'GitHub',
      subtitulo: 'Código',
      imagen: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://github.com'
    }
  ];
}