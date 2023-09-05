import { Component, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service' ;
import {User} from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.css']
})
export class UsuarioActualizarComponent implements OnInit {
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
