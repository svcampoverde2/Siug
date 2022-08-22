import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioNuevo !: FormGroup
  actionBtn: string ="Guardar"
  constructor (private formBuilder: FormBuilder, private router:Router){}
  /*constructor(private formBuilder: FormBuilder, private api:ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData:any, private user:ClienteService,
    private dialogRef: MatDialogRef<AgregarClienteComponent>, private router:Router) { }
*/
  ngOnInit(): void {
    this.usuarioNuevo = this.formBuilder.group({
      cedula:['', Validators.required],
      nombres:['', Validators.required],
      correo:['', Validators.required],
      direccion:['', Validators.required],
      edad:['', Validators.required]
    });
    /*if(this.editData){
      this.actionBtn ="Modificar";
      this.usuarioNuevo.controls['cedula'].setValue(this.editData.cedula);
      this.usuarioNuevo.controls['nombres'].setValue(this.editData.nombres);
      this.usuarioNuevo.controls['apellidos'].setValue(this.editData.apellidos);
      this.usuarioNuevo.controls['correo'].setValue(this.editData.correo);
      this.usuarioNuevo.controls['direccion'].setValue(this.editData.direccion);
      this.usuarioNuevo.controls['edad'].setValue(this.editData.edad);
    }*/
    /*this.user.userN.subscribe((dato) => { this.rol = '' + dato; });*/
  }
 agregar(){
   
 /*if(!this.editData){
  if(this.usuarioNuevo.valid){
    this.api.postCliente(this.usuarioNuevo.value)
    .subscribe({
      next:(res)=>{
        alert("Registro guardado con exito");
        if(!this.get_dato("user")){ 
          this.rol="usuario";   
          this.router.navigate(['userCliente']);
        }
        else{ this.router.navigate(['clientes']);}
     
      this.usuarioNuevo.reset();
      this.dialogRef.close('Guardar')
      },
      error:(res)=>{("Error, el registro no se guardado")}
    })
  }
 }else{
  this.modificarClient()
 }
 }
 modificarClient(){
   this.api.putClient(this.usuarioNuevo.value, this.editData.id)
   .subscribe({
     next:(res)=>{
       alert("Datos modificados con exito");
       this.usuarioNuevo.reset();
       this.dialogRef.close('update');
     },
     error:()=>{
       alert("No se pudo realizar los cambios");
     }
   })*/
 }
  
}
