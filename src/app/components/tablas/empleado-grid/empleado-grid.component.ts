import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-grid',
  templateUrl: './empleado-grid.component.html',
  styleUrls: ['./empleado-grid.component.css']
})
export class EmpleadoGridComponent implements OnInit {

  public empleados: any[] = [];

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

}
