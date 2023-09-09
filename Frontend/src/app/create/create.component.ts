import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogicaService } from 'src/app/logica/logica.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit{
  form: FormGroup;
  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  username: string = "";
  password: string = "";
  mensaje: string = "0";

  constructor(private analizarService: LogicaService, private router: Router) {
    this.form = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        correo: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    )
   }  

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
      }
    )
  }

  enviarCodigo(): void {
    this.nombre = this.form.controls["nombre"].value;
    this.apellido = this.form.controls["apellido"].value;
    this.correo = this.form.controls["correo"].value;
    this.username = this.form.controls["username"].value;
    this.password = this.form.controls["password"].value; 
    //PENDIENTE HACER LA REQUEST
    var objeto = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      username: this.username,
      password: this.password
    }
    
    this.analizarService.ejecutarCreate(objeto).subscribe((res:any)=>{
      console.log(res)
      //ACA SE CAMBIA PARA ALMACENAR VARIABLES GLOBALES Y COSAS DE LA SALIDA
      this.mensaje = res.mensaje
      
    }, err=>{
      console.log(err)
    });
    
  }
 
}
