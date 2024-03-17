import { Component } from '@angular/core';
import { InterfazEstudiantesProfesorComponent } from '../interfaz-estudiantes-profesor/interfaz-estudiantes-profesor.component';
import { CreateUserModalComponent } from '../../../shared/modal/create-user-modal/create-user-modal.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuVerticalProfesorComponent } from '../../layout/menu-vertical-profesor/menu-vertical-profesor.component';
import { Router } from 'express';
import { CreateEvaluacionModalComponent } from '../../../shared/modal/create-evaluacion-modal/create-evaluacion-modal.component';

@Component({
  selector: 'app-interfaz-evaluaciones-profesor',
  standalone: true,
  imports: [MenuVerticalProfesorComponent,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateUserModalComponent,
    InterfazEstudiantesProfesorComponent
  ],
  templateUrl: './interfaz-evaluaciones-profesor.component.html',
  styleUrl: './interfaz-evaluaciones-profesor.component.css'
})
export class InterfazEvaluacionesProfesorComponent {
  evaluacionesList:any[]=[];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    
  }
  open() {
    const modalRef = this.modalService.open(CreateEvaluacionModalComponent);
    modalRef.result.then(value=>{
      console.log("text", value);
      if(this.evaluacionesList.length ==5){
        alert ("Ya creaste el 100% de las evaluaciones")
        return;
        
      }

      if (value !=null){
        this.evaluacionesList.push({
          tema:value.tema,
          porcentaje:value.porcentaje,
          fecha:value.fecha.day+"/"+value.fecha.month+"/"+value.fecha.year});
      }
    })
  }
guardar(){
  let profesor=localStorage.getItem("logeado");
  let objetc:any = JSON.parse(profesor!);
  const data = JSON.parse(localStorage.getItem('logeado')!);
  console.log("Profesor 2,",objetc);

}
} 

