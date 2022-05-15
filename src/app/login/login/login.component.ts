import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  registering: Boolean = false;
  passwordvalidation: string |null = null;

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.user = new User();
   }

  ngOnInit(registering?: boolean): void {

    if(this.authService.isAuthenticated()) {
        this.onClose();
    }

    if(registering!=null)
      this.registering=registering;
  }

  onClose(): void{
    this.dialogRef.close();
  }

  login(){
    if(this.user.username == null || this.user.password == null) {
      //Vacios
      this.snackBar.open("Usuario o contraseña vacios.","cerrar",{
        duration: 2000,
        verticalPosition: 'top'
      });
      return;
    }

    this.authService.login(this.user).subscribe(response => {

      this.authService.saveUser(response.access_token);
      this.authService.saveToken(response.access_token);
      let user = this.authService.user;
      if(user!=null){
        this.snackBar.open("Inicio de sesión con exito.","cerrar",{
          duration: 2000,
          verticalPosition: 'top'
        });
        this.onClose();
      }
    }, err => {
        //Error iniciando sesion
        this.snackBar.open("Error en inicio de sesión.","cerrar",{
          duration: 2000,
          verticalPosition: 'top'
        });
      }
    );
  }

  register(){
    this.authService.register(this.user).subscribe(response =>{

      this.login();
      this.snackBar.open(response.mensaje,"cerrar",{
        duration: 2000,
        verticalPosition: 'top'
      });
      this.onClose();    
    }, err =>{
      this.snackBar.open(err.error.mensaje,"cerrar",{
        duration: 2000,
        verticalPosition: 'top'
      });
    }
    
    );
  }

}
