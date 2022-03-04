import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from './model/Weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(
    private http: HttpClient
  ) { }

  getWeapons(): Observable<Weapon[]>{
    return this.http.get<Weapon[]>('http://localhost:8080/weapon');
  }
}
