import { Component, OnInit } from '@angular/core';
import { MenuVerticalProfesorComponent } from '../../layout/menu-vertical-profesor/menu-vertical-profesor.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserModalComponent } from '../../../shared/modal/create-user-modal/create-user-modal.component';
import { InterfazEvaluacionesProfesorComponent } from '../interfaz-evaluaciones-profesor/interfaz-evaluaciones-profesor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interfaz-estudiantes-profesor',
  standalone: true,
  imports: [MenuVerticalProfesorComponent,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateUserModalComponent,
    InterfazEvaluacionesProfesorComponent
  ],
  templateUrl: './interfaz-estudiantes-profesor.component.html',
  styleUrl: './interfaz-estudiantes-profesor.component.css'
})
export class InterfazEstudiantesProfesorComponent implements OnInit{
  relleno:any[]=[];

  ngOnInit(): void {
  let listaEstudiante= localStorage.getItem("logeado");
  let segundo:any = JSON.parse(listaEstudiante!);
  let tercero:any[] = JSON.parse(segundo.estudiantes!);
  console.log("Estudiantes,",tercero);  
tercero.forEach((value, index)=>{
  this.relleno.push({
    indice:index+1,
    cedula:value.cedula,
    nombreYapellido:value.nombreYapellido,
  });
});
  
}}
