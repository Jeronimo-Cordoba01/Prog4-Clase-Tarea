import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  imports: [],
  templateUrl: './bienvenido.html',
  styleUrl: './bienvenido.css',
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
    },
    {
      titulo: 'Bootstrap',
      subtitulo: 'CSS',
      imagen: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      link: 'https://getbootstrap.com'
    }
  ];
}
