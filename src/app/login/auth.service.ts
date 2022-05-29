import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/User';
import { environment } from 'src/environments/environment';
import { Role } from './model/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User|null = this.user;
  private _token: string|null = this.token;
  private item: string|null = null;

  constructor(private http: HttpClient) { }

  public get user(): User {

    if(this._user != null) {
      return this._user;
    }else
      if (this._user == null && localStorage.getItem('user') != null) {
        this.item = localStorage.getItem('user');
        if(this.item!=null){
          this._user = JSON.parse(this.item);
          if(this._user!=null)
            return this._user;
      }
    }
    
    return new User();
  }

  public get token(): string|null {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && localStorage.getItem('token') != null) {
      this._token = localStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(usuario: User): Observable<any> {
    const urlEndpoint = environment.server+'/oauth/token';

    const credentials = btoa('eldenringcalculatorclient' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credentials
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);

    return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
  }

  saveUser(accessToken: string): void {
    let payload = this.getTokenData(accessToken);
    this._user = new User();
    this._user.username = payload.user_name;

    let roles: Role[] = [];
    for(let i=0; i<payload.authorities.length;i++){
      let role: Role = new Role;
      role.name = payload.authorities[i];
      roles.push(role);
    }
    this._user.role = roles;

    localStorage.setItem('user', JSON.stringify(this._user));
  }

  saveToken(accessToken: string): void {
    this._token = accessToken;
    localStorage.setItem('token', accessToken);
  }

  getTokenData(accessToken: string | null): any {
    if (accessToken != null) {
      if(accessToken != ''){
        var base64Url = accessToken.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
      }
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.getTokenData(this.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }
    return false;
  }

  hasRole(role: string): boolean {
    if(this._user != null)
      if (this._user?.role.find(r => r.name  == role)) {
        return true;
      }
    return false;
  }

  logout(): void {
    this._token = null;
    this._user = null;
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  register(user: User): Observable<any> {
    const urlEndpoint = environment.server+'/user/register';
    return this.http.put<User>(urlEndpoint, user);
  }
}
