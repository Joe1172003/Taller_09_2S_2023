import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service' ;
import {User} from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {
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
