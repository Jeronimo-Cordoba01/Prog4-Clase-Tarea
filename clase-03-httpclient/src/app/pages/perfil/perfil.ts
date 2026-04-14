import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.html'
})
export class Perfil implements OnInit {

  user: any;

  constructor(private github: GithubService) {}

  async ngOnInit() {
    this.user = await this.github.getUser('TU_USUARIO');
  }
}