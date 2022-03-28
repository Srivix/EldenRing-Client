import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Build } from '../build/model/Build';
import { BuildClass } from '../build/model/BuildClass';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  url: string = environment.server;

  constructor(
    private http: HttpClient,
  ) { }

  getBuildClasses(): Observable<BuildClass[]>{
    return this.http.get<BuildClass[]>(this.url+'/buildclass');
  }

}
