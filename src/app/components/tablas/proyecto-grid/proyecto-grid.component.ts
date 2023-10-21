import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.css']
})

export class ProyectoGridComponent implements OnInit {

  public proyectos: any[] = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos(){
    this.proyectoService.getPuntosPorProyecto().subscribe((data: any) => {
      this.proyectos = data
      console.log(data)
    });
  }
}