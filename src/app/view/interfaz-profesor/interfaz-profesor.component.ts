import { Component } from '@angular/core';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUserModalComponent } from '../../shared/modal/create-user-modal/create-user-modal.component';
import { MenuVerticalProfesorComponent } from '../layout/menu-vertical-profesor/menu-vertical-profesor.component';
import { InterfazEstudiantesProfesorComponent } from './interfaz-estudiantes-profesor/interfaz-estudiantes-profesor.component';
import { InterfazEvaluacionesProfesorComponent } from './interfaz-evaluaciones-profesor/interfaz-evaluaciones-profesor.component';
import { CreateEvaluacionModalComponent } from '../../shared/modal/create-evaluacion-modal/create-evaluacion-modal.component';

@Component({
  selector: 'app-interfaz-profesor',
  standalone: true,
  imports: [MenuVerticalProfesorComponent,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateUserModalComponent,
    InterfazEstudiantesProfesorComponent,
    InterfazEvaluacionesProfesorComponent,
  ],
  templateUrl: './interfaz-profesor.component.html',
  styleUrl: './interfaz-profesor.component.css'
})
export class InterfazProfesorComponent {
  evaluacionesList:any[]=[];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    let profesor=localStorage.getItem("logeado");
    console.log("Profesor 1,"+profesor+"")
  }
  open() {
    const modalRef = this.modalService.open(CreateEvaluacionModalComponent);
    modalRef.result.then(value=>{
      console.log("text", value);
      if (value !=null){
        this.evaluacionesList.push({...value});
      }
    })
  }
guardar(){
  let profesor=localStorage.getItem("logeado");
  console.log("Profesor 2,"+profesor+"");
}
}
