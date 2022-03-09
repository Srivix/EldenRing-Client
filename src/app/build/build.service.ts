import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Build } from './model/Build';
import { HttpClient } from '@angular/common/http';
import { BuildPage } from './model/BuildPage';
import { Pageable } from '../core/model/page/Pageable';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(
    private http: HttpClient,
  ) { }

  getBuilds(pageable: Pageable): Observable<BuildPage>{
    return this.http.post<BuildPage>('http://localhost:8080/build',{pageable:pageable});
  }

  getAllBuilds(): Observable<Build[]>{
    return this.http.get<Build[]>('http://localhost:8080/build');
  }

}
