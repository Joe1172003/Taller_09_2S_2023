import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.css']
})
export class UsuarioActualizarComponent {
  users!: any[];
  user: User={
    id:0,
    telefono:'',
    nombre:'',
    apellido:'',
    correo:''
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}
    actualizar() {
    if (this.user.telefono) {
      this.userService.updateUserByPhone(this.user.telefono, this.user).subscribe(
        () => {
          console.log('Usuario actualizado correctamente');
          // Puedes redirigir a otra página o realizar acciones después de la actualización
        },
        (err) => {
          console.error('Error al actualizar usuario:', err);
          // Manejo de errores aquí
        }
      );
    }
  }
}
