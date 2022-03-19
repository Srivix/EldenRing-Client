import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { ResponseCredentials } from '../model/ResponseCredentials';
import { SnackbarService } from '../snackbar.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  isloading: boolean = false;
  registering: boolean = false;

  constructor(
    private loginService: LoginService,
    private auth: AuthService,
    private router: Router,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(registering?: boolean): void {
    if(registering!=null)
      this.registering = registering;

    this.user = new User();
  }

  onClose(): void{
    this.dialogRef.close();
  }

  login(){
    if(this.user.username == '') return;
    if(this.user.password == '') return;

    this.isloading = true;

    this.loginService.login(this.user.username, this.user.password).subscribe(
      (res: ResponseCredentials) =>{
        this.loginService.putCredentials(res);

        this.router.navigate(['main']);
        this.isloading = false;
      },
      () =>{
        this.snackbarService.error('Credenciales incorrectas.');
        this.isloading = false;
      }
    );
  }

  register(){
    
  }

}
