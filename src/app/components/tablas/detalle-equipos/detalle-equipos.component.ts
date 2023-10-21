import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-detalle-equipos',
  templateUrl: './detalle-equipos.component.html',
  styleUrls: ['./detalle-equipos.component.css']
})
export class DetalleEquiposComponent implements OnInit {

  public equipos: any[] = [];

  constructor(private equiposService: EquipoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getEquipo();
  }

  public getEquipo() {
    this.route.paramMap.subscribe(params => {
      const proyectoId = params.get('ProyectoID');
      if (proyectoId !== null) {
        this.equiposService.getEquipos().subscribe(equipos => {
          let filteredEquipos : any = [];
          equipos.forEach((equipo: any) => {
            if (equipo.ProyectoID == proyectoId) {
              filteredEquipos.push(equipo);
            }
          });
          this.equipos = filteredEquipos;
        });
      }
    });
  }
}
