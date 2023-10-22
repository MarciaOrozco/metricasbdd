import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo.service';
import { ObjetivosService } from 'src/app/services/objetivos.service';

@Component({
  selector: 'app-detalle-equipos',
  templateUrl: './detalle-equipos.component.html',
  styleUrls: ['./detalle-equipos.component.css']
})
export class DetalleEquiposComponent implements OnInit {
  public equipos: any[] = [];
  public helperequipos: any;
  public objetivo: number = 0;

  constructor(
    private equiposService: EquipoService,
    private route: ActivatedRoute,
    private objetivoService: ObjetivosService
  ) {}

  ngOnInit(): void {
    this.objetivo = this.objetivoService.getobjetivosPorEquipos()
    this.getEquipo();
  }

  public getEquipo() {
    this.route.paramMap.subscribe((params) => {
      const proyectoId = params.get('ProyectoID');
      if (proyectoId !== null) {
        this.equiposService.getEquipos().subscribe((equipos) => {
          let filteredEquipos: any = [];
          equipos.forEach((equipo: any) => {
            if (equipo.ProyectoID == proyectoId) {
              filteredEquipos.push(equipo);
            }
          });
          this.equipos = filteredEquipos;
          this.updateEquiposWithPoints();
        });
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