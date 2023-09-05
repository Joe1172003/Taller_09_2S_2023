import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service' ;
import {User} from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-leer',
  templateUrl: './usuario-leer.component.html',
  styleUrls: ['./usuario-leer.component.css']
})
export class UsuarioLeerComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (err) => {
        console.error('Error al obtener usuarios:', err);
        // Manejo de errores aquí
      }
    );
  }
}
