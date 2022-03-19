import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ResponseCredentials } from './model/ResponseCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(username: string, password: string): Observable<ResponseCredentials>{
    this.authService.clearCredentials();

    return this.http.post<ResponseCredentials>(environment.server+'/authenticate', {username: username, password: password});
  }

  putCredentials(res: ResponseCredentials){
    this.authService.putTokenCredentials(res);
  }

}