import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Build } from './model/Build';
import { HttpClient } from '@angular/common/http';
import { BuildPage } from './model/BuildPage';
import { Pageable } from '../core/model/page/Pageable';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  url: string = environment.server+'/build';

  constructor(
    private http: HttpClient,
  ) { }

  private composeFindUrl(username?: string | null| undefined, name?: string | null| undefined, weapon1name?: string | null| undefined, weapon2name?: string | null| undefined, startDate?: Date, endDate?: Date): string{

    let params = '';

    if(username != null)
      params += 'username='+username; 

    if(name != null){
      if(params != '') params += '&';
      params += 'name='+name;
    }

    if(weapon1name != null){
      if(params != '') params += '&';
      params += 'weapon1name='+weapon1name;
    }

    if(weapon2name != null){
      if(params != '') params += '&';
      params += 'weapon2name='+weapon2name;
    }

    if(startDate != null){
      if(params != '') params += '&';
      let formatStartDate = formatDate(startDate, 'dd-MM-yyyy', 'es-ES')
      params += 'startDate='+formatStartDate;
    }

    if(endDate != null){
      if(params != '') params += '&';
      let formatEndDate = formatDate(endDate, 'dd-MM-yyyy', 'es-ES')
      params += 'endDate='+formatEndDate;
    }

    if(params=='') return this.url;
    else return this.url + '?'+params;
    
  }

  getBuilds(pageable: Pageable, username?: string, name?: string, weapon1name?: string | null| undefined, weapon2name?: string | null| undefined, startDate?: Date, endDate?: Date): Observable<BuildPage>{
    return this.http.post<BuildPage>(this.composeFindUrl(username, name, weapon1name, weapon2name, startDate, endDate),{pageable:pageable, username, name, weapon1name, weapon2name, startDate, endDate});
  }

  getAllBuilds(): Observable<Build[]>{
    return this.http.get<Build[]>(this.url);
  }

  saveBuild(build: Build): Observable<Build>{
    return this.http.put<Build>(this.url, build);
  }

}
