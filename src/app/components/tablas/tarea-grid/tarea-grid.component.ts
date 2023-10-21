import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tarea-grid',
  templateUrl: './tarea-grid.component.html',
  styleUrls: ['./tarea-grid.component.css']
})
export class TareaGridComponent implements OnInit {

  public tareas: any[] = [];

  constructor(private tareasService: TareaService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  public getTareas(){
    this.tareasService.getTareas().subscribe(data => {
      if(data){
        this.tareas = data;
      }
    });
  }
}
