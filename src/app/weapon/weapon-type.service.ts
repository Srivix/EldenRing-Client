import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponType } from './model/WeaponType';

@Injectable({
  providedIn: 'root'
})
export class WeaponTypeService {

  constructor(
    private http: HttpClient
  ) { }

  getWeaponTypes(): Observable<WeaponType[]>{
    return this.http.get<WeaponType[]>('http://localhost:8080/weaponType');
  }
}
