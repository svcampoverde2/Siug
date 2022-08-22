import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { LoginComponent } from './login/login.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'',component:PagePrincipalComponent},
  {path:'pagePrincipal',component:PagePrincipalComponent},
  {path:'sesion',component:LoginComponent},
  {path:'estudiante',component:EstudianteComponent},
  {path:'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
