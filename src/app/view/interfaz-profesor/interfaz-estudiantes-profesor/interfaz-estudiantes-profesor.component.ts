import { Component, OnInit } from '@angular/core';
import { MenuVerticalProfesorComponent } from '../../layout/menu-vertical-profesor/menu-vertical-profesor.component';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserModalComponent } from '../../../shared/modal/create-user-modal/create-user-modal.component';
import { InterfazEvaluacionesProfesorComponent } from '../interfaz-evaluaciones-profesor/interfaz-evaluaciones-profesor.component';
import { CommonModule } from '@angular/common';
import { ModalEstudiantesComponent } from '../../../shared/modal/modal-estudiantes/modal-estudiantes.component';
import { ModalNotasComponent } from '../../../shared/modal/modal-notas/modal-notas.component';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-interfaz-estudiantes-profesor',
  standalone: true,
  imports: [
    MenuVerticalProfesorComponent,
    NgbDatepickerModule,
    ModalEstudiantesComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateUserModalComponent,
    InterfazEvaluacionesProfesorComponent,
  ],
  templateUrl: './interfaz-estudiantes-profesor.component.html',
  styleUrl: './interfaz-estudiantes-profesor.component.css',
})
export class InterfazEstudiantesProfesorComponent implements OnInit {
  relleno: any[] = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }
  estudiante:any; 
  open() {
    const modalRef = this.modalService.open(ModalEstudiantesComponent);
    modalRef.result.then((value) => {
      this.relleno = [];
      this.estudiante = JSON.parse(localStorage.getItem(value.cedula)!);
      let curso = JSON.parse(this.estudiante.curso);
      let materias = curso.evaluaciones;
      this.relleno = materias;
    });
  }
  openNotas(fila: any, indice: any) {
    const modalRef = this.modalService.open(ModalNotasComponent);
    modalRef.result.then((value) => {
      let nota = {
        calificaciones: value.nota,
        fecha: fila.fecha,
        porcentaje: fila.porcentaje,
        tema: fila.tema,
      };
      this.relleno[indice] = nota;
      console.log('verifico',this.estudiante)
      let curso = JSON.parse(this.estudiante.curso);
      curso.evaluaciones= this.relleno;
      let guardarNotas = JSON.stringify(curso);
      this.estudiante.curso = guardarNotas; 
      localStorage.setItem(this.estudiante.cedula,JSON.stringify(this.estudiante))

    });

  }
}
