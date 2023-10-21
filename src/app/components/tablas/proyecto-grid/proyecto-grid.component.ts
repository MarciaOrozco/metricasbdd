import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';


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
    this.proyectoService.getProyectos().subscribe(data => {
      if(data){
        this.proyectos = data;
        console.log( this.proyectos )
      }
    });
  }
}
