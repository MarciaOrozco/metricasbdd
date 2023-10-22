import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { ObjetivosService } from 'src/app/services/objetivos.service';

@Component({
  selector: 'app-equipo-grid',
  templateUrl: './equipo-grid.component.html',
  styleUrls: ['./equipo-grid.component.css']
})


export class EquipoGridComponent implements OnInit {

  public equipos: any[] = [];
  public helperequipos: any;
  public objetivo: number = 0;

  constructor(private equiposService: EquipoService, private objetivoService: ObjetivosService) { }

  ngOnInit(): void {
    this.objetivo = this.objetivoService.getobjetivosPorEquipos()
    this.getEquipos();
  }

  public getEquipos(){
    this.equiposService.getEquipos().subscribe(equipos => {
      if(equipos){
        this.equipos = equipos;
        this.updateEquiposWithPoints();
      }
    });

  }

  private updateEquiposWithPoints() {
    this.equiposService.getPuntosPorEquipo().subscribe(x => {
      this.helperequipos = x;
      if (this.equipos && this.helperequipos) {
        const puntosMap = new Map<number, number>();
        this.helperequipos.forEach((equipo: any) => {
          puntosMap.set(equipo.EquipoID, equipo.TotalPuntos);
        });
  
        this.equipos.forEach((equipo: any) => {
          const puntos = puntosMap.get(equipo.EquipoID);
          if (puntos !== undefined) {
            equipo.TotalPuntos = puntos;
          }
        });
      }
    }) 
  }

  public getPuntosClass(totalPuntos: number) {
    if (totalPuntos === this.objetivo) {
      return 'green-text';
    } else if (totalPuntos> this.objetivo) {
      return 'blue-text';
    } else {
      return 'red-text';
    }
  }
}
