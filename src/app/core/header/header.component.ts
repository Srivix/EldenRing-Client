import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login/login.component';
import { AuthService } from 'src/app/login/auth.service';
import { UserComponent } from 'src/app/login/user/user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog,
    public authService: AuthService) { }

  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent,{
      data:{}
    });
  }

  openUserDetail(){
    const dialogRef = this.dialog.open(UserComponent,{
      data:{}
    });
  }

}
