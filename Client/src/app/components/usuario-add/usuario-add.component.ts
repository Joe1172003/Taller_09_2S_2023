import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent {
  users!: any[];
  user: User={
    id:0,
    nombre:'',
    apellido:'',
    telefono:'',
    correo:''
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, err => console.error(err));
  }
  crear(){
    delete this.user.id;
    this.userService.addUser(this.user).subscribe(
      res => {
        this.users=res;
      },
      err=> console.error(err)
    )
  }
}
