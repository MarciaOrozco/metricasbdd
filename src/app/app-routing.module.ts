import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { EquipoGridComponent } from './components/tablas/equipo-grid/equipo-grid.component';
import { SprintGridComponent } from './components/tablas/sprint-grid/sprint-grid.component';

const routes: Routes = [
 { path:'login',component: LoginComponent},
 {
  path: 'proyectos',
  component: HomeComponent,
  //canActivate: [AuthGuard],
},
{
  path: 'equipos',
  component: EquipoGridComponent,
  //canActivate: [AuthGuard],
},
{
  path: 'sprints',
  component: SprintGridComponent,
  //canActivate: [AuthGuard],
},
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
