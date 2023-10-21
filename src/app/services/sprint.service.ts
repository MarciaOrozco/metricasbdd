import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SprintService {

  private hostUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  public getSprints(): Observable<any> {
    return this.http.get<any>(this.hostUrl + `/sprints`);
  }

  public getPuntosPorProyecto() {
    return this.http.get(`${this.hostUrl}/puntosPorSprint`);
  }
}