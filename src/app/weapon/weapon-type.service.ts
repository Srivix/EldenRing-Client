import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeaponType } from './model/WeaponType';

@Injectable({
  providedIn: 'root'
})
export class WeaponTypeService {

  url: string = environment.server+'/weaponType';

  constructor(
    private http: HttpClient
  ) { }

  getWeaponTypes(): Observable<WeaponType[]>{
    return this.http.get<WeaponType[]>(this.url);
  }
}
