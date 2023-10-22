import { Component, OnInit } from '@angular/core';
import { ObjetivosService } from 'src/app/services/objetivos.service';
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
  public objetivo: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  constructor(private sprintsService: SprintService,
    private objetivoService: ObjetivosService
    ) { }

    ngOnInit(): void {
      this.objetivo = this.objetivoService.getobjetivosPorSprint()
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

  public getPuntosClass(totalPuntos: number) {
    if (totalPuntos === this.objetivo) {
      return 'green-text';
    } else if (totalPuntos > this.objetivo) {
      return 'blue-text';
    } else {
      return 'red-text';
    }
  }

  
  public calculateIndices() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return { startIndex, endIndex };
  }

  public getPages(): number[] {
    const totalPages = Math.ceil(this.sprints.length / this.itemsPerPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  public pageClick(page: number){
    this.currentPage = page;
  }

  public previousPageClick(){
    this.currentPage = this.currentPage - 1
  }

  public nextPageClick(){
    this.currentPage = this.currentPage + 1
  }
}