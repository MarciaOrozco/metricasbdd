import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.css']
})

export class ProyectoGridComponent implements OnInit {

  data: any[] = [];
  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(res => {
      if(res){
        this.data = res;
        console.log(res)
      }
    });
  }
}
