import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjetivosService } from 'src/app/services/objetivos.service';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent implements OnInit {

  public myForm!:FormGroup;
  public objetivoSprint: number = 0;
  public objetivoProyecto: number = 0;
  public objetivoEquipos: number = 0;
  public guardado: boolean = false;



  constructor(
    private fb: FormBuilder,
    private objetivoService: ObjetivosService
    ) { }

  ngOnInit(): void {

    this.objetivoProyecto = this.objetivoService.getobjetivosPorProyecto();
    this.objetivoEquipos = this.objetivoService.getobjetivosPorEquipos();
    this.objetivoSprint = this.objetivoService.getobjetivosPorSprint();

    this.myForm = this.fb.group({
      objetivoProyecto:['',[Validators.required]],
      objetivoEquipos:['',[Validators.required]],
      objetivoSprint:['',[Validators.required]],
    });
  }

  public submit(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }
    this.objetivoService.updateObjetivos(this.myForm.value["objetivoProyecto"],this.myForm.value["objetivoEquipos"],this.myForm.value["objetivoSprint"])
    this.guardado = true;
  }

  public get f():any{
    return this.myForm.controls;
  }

}
