import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from "./services/user.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuarioActualizarComponent } from './components/usuario-actualizar/usuario-actualizar.component';
import { UsuarioAddComponent } from './components/usuario-add/usuario-add.component';
import { UsuarioEliminarComponent } from './components/usuario-eliminar/usuario-eliminar.component';
import { UsuarioLeerComponent } from './components/usuario-leer/usuario-leer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuarioActualizarComponent,
    UsuarioAddComponent,
    UsuarioEliminarComponent,
    UsuarioLeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
