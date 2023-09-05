import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioAddComponent} from './components/usuario-add/usuario-add.component';
import {UsuarioActualizarComponent} from './components/usuario-actualizar/usuario-actualizar.component';
import {UsuarioEliminarComponent} from './components/usuario-eliminar/usuario-eliminar.component'
import {UsuarioLeerComponent} from './components/usuario-leer/usuario-leer.component'
const routes: Routes = [
  { path:'',
  redirectTo: '/user',
  pathMatch:'full'},
  {
    path:'user',
    component:UsuarioAddComponent
  },
  {
    path:'user/eliminar',
    component:UsuarioEliminarComponent
  },
  {
    path:'user/actualizar',
    component:UsuarioActualizarComponent
  },
  {
    path:'user/leer',
    component:UsuarioLeerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
