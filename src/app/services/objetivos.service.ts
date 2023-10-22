import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjetivosService {

  public objetivosPorProyecto = 243;
  public objetivosPorEquipos = 81;
  public objetivosPorSprint= 27;

  constructor() { }

  public getobjetivosPorProyecto() {
    return this.objetivosPorProyecto;
  }

  public getobjetivosPorEquipos() {
    return this.objetivosPorEquipos;
  }

  public getobjetivosPorSprint() {
    return this.objetivosPorSprint;
  }

  public updateObjetivos(objetivosPorProyecto: number, objetivosPorEquipos: number, objetivosPorSprint: number){
    this.objetivosPorProyecto = objetivosPorProyecto;
    this.objetivosPorEquipos = objetivosPorEquipos;
    this.objetivosPorSprint = objetivosPorSprint;
  }

  
}
