import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogicaService } from 'src/app/logica/logica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  form: FormGroup;
  username: string = "";
  password: string = "";
  mensaje: string = "0";

  constructor(private analizarService: LogicaService, private router: Router) {
    this.form = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    )
   }  

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
      }
    )
  }

  enviarCodigo(): void {
    this.username = this.form.controls["username"].value;
    this.password = this.form.controls["password"].value; 
    //PENDIENTE HACER LA REQUEST
    var objeto = {
      password: this.password
    }
        
    this.analizarService.ejecutarUpdate(this.username, objeto).subscribe((res:any)=>{
      console.log(res)
      //ACA SE CAMBIA PARA ALMACENAR VARIABLES GLOBALES Y COSAS DE LA SALIDA
      this.mensaje = res.mensaje
      
    }, err=>{
      console.log(err)
    });
    
  }


}
