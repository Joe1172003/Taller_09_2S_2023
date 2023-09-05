import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuarioAddComponent } from './components/usuario-add/usuario-add.component';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from "./services/user.service";
import { FormsModule } from '@angular/forms';
import { UsuarioEliminarComponent } from './components/usuario-eliminar/usuario-eliminar.component';
import { UsuarioLeerComponent } from './components/usuario-leer/usuario-leer.component';
import { UsuarioActualizarComponent } from './components/usuario-actualizar/usuario-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuarioAddComponent,
    UsuarioEliminarComponent,
    UsuarioLeerComponent,
    UsuarioActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }