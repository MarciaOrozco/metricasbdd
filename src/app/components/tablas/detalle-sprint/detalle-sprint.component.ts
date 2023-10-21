import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-detalle-sprint',
  templateUrl: './detalle-sprint.component.html',
  styleUrls: ['./detalle-sprint.component.css']
})
export class DetalleSprintComponent implements OnInit {

  public sprints: any[] = [];
  public helpersprints: any;

  constructor(private sprintService: SprintService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getSprint();

  }

  public getSprint() {
    this.route.paramMap.subscribe(params => {
      
      const equipoId = params.get('EquipoID');
      if (equipoId !== null) {
        this.sprintService.getSprints().subscribe(sprints => {

          let filteredSprints : any = [];  

          sprints.forEach((sprint: any) => {
            if (sprint.EquipoID.toString() === equipoId) {
              filteredSprints.push(sprint);
            }
          });
  
          this.sprints = filteredSprints;
          this.updateSprintWithPoints();
        });
      }
    });
  }

  private updateSprintWithPoints() {
    this.sprintService.getPuntosPorSprint().subscribe(x => {
      this.helpersprints = x;
      if (this.sprints && this.helpersprints) {
        const puntosMap = new Map<number, number>();
        this.helpersprints.forEach((sprint: any) => {
          puntosMap.set(sprint.SprintID, sprint.TotalPuntos);
        });
  
        this.sprints.forEach((sprint: any) => {
          const puntos = puntosMap.get(sprint.SprintID);
          if (puntos !== undefined) {
            sprint.TotalPuntos = puntos;
          }
        });
      }
    })
    
  }
}
