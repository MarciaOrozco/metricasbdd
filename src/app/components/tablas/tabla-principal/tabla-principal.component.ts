import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-tabla-principal',
  templateUrl: './tabla-principal.component.html',
  styleUrls: ['./tabla-principal.component.css']
})
export class TablaPrincipalComponent implements OnInit {

  data: any[] = [];
  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(res => {
      if(res){
        this.data = res;
        console.log(res)
      }
    });
  }
}
