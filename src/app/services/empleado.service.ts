import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  private hostUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  public getEmpleados(): Observable<any> {
    return this.http.get<any>(this.hostUrl + `/Empleado/GetEmpleados/`);
  }
}