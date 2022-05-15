import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weapon } from './model/Weapon';
import { WeaponType } from './model/WeaponType';

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

  saveWeapon( weapon: Weapon): Observable<Weapon> {

  if(weapon.id != null && weapon.id !=0)    
    return this.http.put<Weapon>(this.url+"/"+weapon.id, weapon);
  else
    return this.http.put<Weapon>(this.url, weapon)

  }

  uploadPhoto(file: File, name: string): Observable<HttpEvent<{}>>{
    let formData = new FormData();
    formData.append("file",file);
    formData.append("name",name);

    const req = new HttpRequest('PUT', `${this.url}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  getWeaponTypes(): Observable<WeaponType[]>{
    return this.http.get<WeaponType[]>(environment.server+'/weaponType');
  }

}
