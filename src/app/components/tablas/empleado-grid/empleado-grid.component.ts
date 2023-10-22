import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-grid',
  templateUrl: './empleado-grid.component.html',
  styleUrls: ['./empleado-grid.component.css']
})
export class EmpleadoGridComponent implements OnInit {

  public empleados: any[] = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  public getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(data => {
      if(data){
        this.empleados = data;
      }
    });
  }

  
  public calculateIndices() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return { startIndex, endIndex };
  }

  public getPages(): number[] {
    const totalPages = Math.ceil(this.empleados.length / this.itemsPerPage);
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
