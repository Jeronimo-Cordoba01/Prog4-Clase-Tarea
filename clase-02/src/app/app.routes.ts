import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Bienvenido } from './pages/bienvenido/bienvenido';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Error } from './pages/error/error';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'bienvenido', component: Bienvenido },
  { path: 'sobre-mi', component: SobreMi },
  { path: '**', component: Error }
];