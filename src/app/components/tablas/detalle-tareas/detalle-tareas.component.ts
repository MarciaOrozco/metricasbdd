import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-detalle-tareas',
  templateUrl: './detalle-tareas.component.html',
  styleUrls: ['./detalle-tareas.component.css']
})
export class DetalleTareasComponent implements OnInit {

  public tareas: any[] = [];

  constructor(private tareasService: TareaService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getTareas();
  }

  public getTareas() {
    this.route.paramMap.subscribe(params => {
      
      const sprintId = params.get('SprintID');

      if (sprintId !== null) {
        this.tareasService.getTareas().subscribe(tareas => {
          let filteredTareas : any = [];  
          tareas.forEach((tarea: any) => {
            if (tarea.SprintID.toString() == sprintId) {
              filteredTareas.push(tarea);
            }
          });
  
          this.tareas = filteredTareas;
        });
      }
    });
  }

}
