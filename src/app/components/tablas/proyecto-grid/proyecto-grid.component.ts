import { Component, OnInit } from '@angular/core';
import { ObjetivosService } from 'src/app/services/objetivos.service';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.css']
})

export class ProyectoGridComponent implements OnInit {

  public proyectos: any[] = [];
  public objetivo: number = 0;

  constructor(private proyectoService: ProyectoService, private objetivoService: ObjetivosService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos(){
    this.objetivo = this.objetivoService.getobjetivosPorProyecto();
    this.proyectoService.getPuntosPorProyecto().subscribe((proyectos: any) => {
      this.proyectos = proyectos
    });
  }

  public checkObjetivos(totalPuntos: number) {
    if (totalPuntos === this.objetivo ){
      return "Cumple Objetivo";
    } else if (totalPuntos > this.objetivo ){
      return "Supera objetivo";
    } else {
      return "No cumple objetivo"
    }
  }

  getPuntosClass(totalPuntos: number) {
    if (totalPuntos === this.objetivo) {
      return 'green-text';
    } else if (totalPuntos > this.objetivo) {
      return 'blue-text';
    } else {
      return 'red-text';
    }
  }
}