import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SprintService } from 'src/app/services/sprint.service';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-detalle-sprint',
  templateUrl: './detalle-sprint.component.html',
  styleUrls: ['./detalle-sprint.component.css']
})
export class DetalleSprintComponent implements OnInit {

  public sprints: any[] = [];

  constructor(private sprintService: SprintService,
    private route: ActivatedRoute,
    private tareasService: TareaService
    ) { }

  ngOnInit(): void {
    this.getSprint();

  }

  public getSprint() {
    this.route.paramMap.subscribe(params => {
      
      const equipoId = params.get('equipoId');
      if (equipoId !== null) {
        this.sprintService.getSprints().subscribe(sprints => {

          let filteredSprints : any = [];  

          sprints.forEach((sprint: any) => {
            if (sprint.equipo.equipoId.toString() === equipoId) {
              filteredSprints.push(sprint);
            }
          });
  
          this.sprints = filteredSprints;
        });
      }
    });
  }



}
