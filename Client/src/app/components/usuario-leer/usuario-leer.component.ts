import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-leer',
  templateUrl: './usuario-leer.component.html',
  styleUrls: ['./usuario-leer.component.css']
})
export class UsuarioLeerComponent {
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
