import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { InicioComponent } from './inicio/inicio.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [{path: "", component:CreateComponent}, {path:"create", component:CreateComponent}, {path:"read", component:ReadComponent}, 
                        {path:"update", component:UpdateComponent}, {path:"delete", component:DeleteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
