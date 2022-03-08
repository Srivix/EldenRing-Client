import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Build } from './model/Build';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(
    private http: HttpClient,
  ) { }

  getBuilds(): Observable<Build[]>{
    return this.http.get<Build[]>('http://localhost:8080/build');
  }

}
