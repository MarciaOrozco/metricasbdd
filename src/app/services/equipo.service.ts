import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  private hostUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  public getEquipos(): Observable<any> {
    return this.http.get<any>(this.hostUrl + `/equipos`);
  }

  public getPuntosPorEquipo() {
    return this.http.get(`${this.hostUrl}/puntosPorEquipo`);
  }
}