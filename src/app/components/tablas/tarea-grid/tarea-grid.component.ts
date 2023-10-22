import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tarea-grid',
  templateUrl: './tarea-grid.component.html',
  styleUrls: ['./tarea-grid.component.css']
})
export class TareaGridComponent implements OnInit {

  public tareas: any[] = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 10;


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

  public calculateIndices() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return { startIndex, endIndex };
  }

  public getPages(): number[] {
    const totalPages = Math.ceil(this.tareas.length / this.itemsPerPage);
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
