import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service' ;
import {User} from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.component.html',
  styleUrls: ['./usuario-eliminar.component.css']
})
export class UsuarioEliminarComponent implements OnInit{
  users!: any[];
  user: User={
    telefono:''
  };
  mensaje: string = "0";
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {}
  eliminar() {
    if (this.user.telefono) {
      this.userService.deleteUserByPhone(this.user.telefono).subscribe(
        () => {
          console.log('Usuario eliminado correctamente');
          // Puedes redirigir a otra página o realizar acciones después de la eliminación
        },
        (err) => {
          console.error('Error al eliminar usuario:', err);
          // Manejo de errores aquí
        }
      );
    }
  }
}
