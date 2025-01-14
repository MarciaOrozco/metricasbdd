import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TareaService {

  private hostUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  public getTareas(): Observable<any> {
    return this.http.get<any>(this.hostUrl + `/tareas`);
  }
}