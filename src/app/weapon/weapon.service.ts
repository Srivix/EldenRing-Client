import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weapon } from './model/Weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  url: string = environment.server+'/weapon';

  constructor(
    private http: HttpClient
  ) { }

  getWeapons(): Observable<Weapon[]>{
    return this.http.get<Weapon[]>(this.url);
  }
}
