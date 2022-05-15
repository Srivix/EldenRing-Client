import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Build } from './model/Build';
import { HttpClient } from '@angular/common/http';
import { BuildPage } from './model/BuildPage';
import { Pageable } from '../core/model/page/Pageable';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';
import { BuildState } from './model/BuildState';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  url: string = environment.server+'/build';

  constructor(
    private http: HttpClient,
  ) { }

  private composeFindUrl(username?: string | null, name?: string | null, weapon1name?: string | null, weapon2name?: string | null, startDate?: Date, endDate?: Date, state?: string | null): string{

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

    if(state !=null){
      if(params != '') params += '&';
      params += 'state='+state;
    }

    if(params!='') return '?'+params;
    else return '';
    
  }

  getPublicBuilds(pageable: Pageable, username?: string | null, name?: string | null, weapon1name?: string | null, weapon2name?: string | null, startDate?: Date, endDate?: Date): Observable<BuildPage>{
    return this.http.post<BuildPage>(this.url+this.composeFindUrl(username, name, weapon1name, weapon2name, startDate, endDate, null),{pageable:pageable, username, name, weapon1name, weapon2name, startDate, endDate});
  }

  getMisBuilds(pageable: Pageable, name?: string | null, weapon1name?: string | null, weapon2name?: string | null, startDate?: Date, endDate?: Date, state?: string | null): Observable<BuildPage>{
    return this.http.post<BuildPage>(this.url+'/user'+this.composeFindUrl(null, name, weapon1name, weapon2name, startDate, endDate, state),{pageable:pageable, name, weapon1name, weapon2name, startDate, endDate, state});
  }

  getAllBuilds(pageable: Pageable, username?: string | null, name?: string | null, weapon1name?: string | null, weapon2name?: string | null, startDate?: Date, endDate?: Date, state?: string | null): Observable<BuildPage>{
    return this.http.post<BuildPage>(this.url+'/all'+this.composeFindUrl(username, name, weapon1name, weapon2name, startDate, endDate, state),{pageable:pageable, username, name, weapon1name, weapon2name, startDate, endDate, state});
  }

  saveBuild(build: Build): Observable<any>{
    if(build.id != null && build.id !=0)    
    return this.http.put<Build>(this.url+"/"+build.id, build);
  else
    return this.http.put<Build>(this.url, build)
  }

  deleteBuild(idBuild: number): Observable<any> {
    return this.http.delete<any>(this.url+"/"+idBuild);
  }

  getBuildStates(): Observable<BuildState[]>{
    return this.http.get<BuildState[]>(environment.server+'/buildstate');
  }

}
