import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor (private dialog:MatDialog, private router:Router, private user:ClienteService) { }

  openDialogSesion(){
    this.dialog.open(LoginComponent);
  }
  rol!:any;
  get_dato(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return e;
    }
  }
  ngDoCheck(): void {
    this.rol=this.get_dato("user");
    console.log(this.rol);
}
cerrarSesion() {
  this.router.navigate(['/pagePrincipal']);
  localStorage.clear();
}
  ngOnInit(): void {
    this.user.userN.subscribe((dato) => { this.rol = '' + dato; });
  }
}
