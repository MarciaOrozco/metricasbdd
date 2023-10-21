import { Component, OnInit } from '@angular/core';
import { SprintService } from 'src/app/services/sprint.service';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-sprint-grid',
  templateUrl: './sprint-grid.component.html',
  styleUrls: ['./sprint-grid.component.css']
})
export class SprintGridComponent implements OnInit {

  public sprints: any[] = [];
  public helpersprints: any;

  constructor(private sprintsService: SprintService
    ) { }

    ngOnInit(): void {
      this.getSprints();
    }
  
  public getSprints(){
    this.sprintsService.getSprints().subscribe(data => {
      if(data){
        this.sprints = data;
        this.updateSprintWithPoints()
      }
    });
  }

  private updateSprintWithPoints() {
    this.sprintsService.getPuntosPorSprint().subscribe(x => {
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