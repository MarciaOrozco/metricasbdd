import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo-grid',
  templateUrl: './equipo-grid.component.html',
  styleUrls: ['./equipo-grid.component.css']
})


export class EquipoGridComponent implements OnInit {

  public equipos: any[] = [];

  constructor(private equiposService: EquipoService) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  public getEquipos(){
    this.equiposService.getEquipos().subscribe(data => {
      if(data){
        this.equipos = data;
      }
    });
  }
}
