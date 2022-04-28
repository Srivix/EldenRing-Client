import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog,private authService: AuthService,
    private router: Router, private snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {


    return next.handle(req).pipe(
      catchError(e => {
        if (e.status == 401) {

          if (this.authService.isAuthenticated()) {
            this.authService.logout();
          }
          this.router.navigate(['/calculator']);
          this.openLogin();
        }

        if (e.status == 403) {
          this.router.navigate(['/calculator']);
          this.openLogin();
        }
        this.snackBar.open("Error: "+e.status+": "+e.error.error_description,"cerrar",{
          duration: 2000,
          verticalPosition: 'top'
        });

        return throwError(e);
      })
    );
  }

  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent,{
      data:{}
    });
  }
}
