import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { EquipoGridComponent } from './components/tablas/equipo-grid/equipo-grid.component';
import { SprintGridComponent } from './components/tablas/sprint-grid/sprint-grid.component';
import { TareaGridComponent } from './components/tablas/tarea-grid/tarea-grid.component';
import { EmpleadoGridComponent } from './components/tablas/empleado-grid/empleado-grid.component';
import { DetalleEquiposComponent } from './components/tablas/detalle-equipos/detalle-equipos.component';
import { DetalleSprintComponent } from './components/tablas/detalle-sprint/detalle-sprint.component';
import { DetalleTareasComponent } from './components/tablas/detalle-tareas/detalle-tareas.component';

const routes: Routes = [
 { path:'login',component: LoginComponent},
 {
  path: 'proyectos',
  component: HomeComponent,
  canActivate: [AuthGuard],
},
{
  path: 'equipos',
  component: EquipoGridComponent,
  canActivate: [AuthGuard],
},
{ path: 'equipo/:ProyectoID',
 component: DetalleEquiposComponent ,
 canActivate: [AuthGuard],
},
{ path: 'sprint/:EquipoID',
 component: DetalleSprintComponent ,
 canActivate: [AuthGuard],
},
{ path: 'tareas/:SprintID',
 component: DetalleTareasComponent ,
 canActivate: [AuthGuard],
},
{
  path: 'sprints',
  component: SprintGridComponent,
  canActivate: [AuthGuard],
},
{
  path: 'tareas',
  component: TareaGridComponent,
  canActivate: [AuthGuard],
},
{
  path: 'empleados',
  component: EmpleadoGridComponent,
  canActivate: [AuthGuard],
},
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
