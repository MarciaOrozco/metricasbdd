import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  private hostUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<any> {
    return this.http.get<any>(this.hostUrl + `/Proyecto/GetProyectos/`);
  }
}