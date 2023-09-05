import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.component.html',
  styleUrls: ['./usuario-eliminar.component.css']
})
export class UsuarioEliminarComponent {
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
