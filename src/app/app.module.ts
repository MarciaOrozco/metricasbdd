import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TablaPrincipalComponent } from './components/tablas/tabla-principal/tabla-principal.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipoGridComponent } from './components/tablas/equipo-grid/equipo-grid.component';
import { SprintGridComponent } from './components/tablas/sprint-grid/sprint-grid.component';
import { ProyectoGridComponent } from './components/tablas/proyecto-grid/proyecto-grid.component';
import { EmpleadoGridComponent } from './components/tablas/empleado-grid/empleado-grid.component';
import { TareaGridComponent } from './components/tablas/tarea-grid/tarea-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    TablaPrincipalComponent,
    ObjetivosComponent,
    EquipoGridComponent,
    SprintGridComponent,
    ProyectoGridComponent,
    EmpleadoGridComponent,
    TareaGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
