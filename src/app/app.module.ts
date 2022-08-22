import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { FooterComponent } from './footer/footer.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegistroComponent } from './registro/registro.component';
@NgModule({
  declarations: [
    HeaderComponent,
    PagePrincipalComponent,
    FooterComponent,
    LoginComponent, AppComponent, EstudianteComponent, RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatDialogModule, MatMenuModule, 
    BrowserAnimationsModule, MatToolbarModule, MatIconModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule
  ],
  entryComponents:[LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
