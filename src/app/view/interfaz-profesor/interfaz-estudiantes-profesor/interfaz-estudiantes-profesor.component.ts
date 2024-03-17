import { Component, OnInit } from '@angular/core';
import { MenuVerticalProfesorComponent } from '../../layout/menu-vertical-profesor/menu-vertical-profesor.component';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserModalComponent } from '../../../shared/modal/create-user-modal/create-user-modal.component';
import { InterfazEvaluacionesProfesorComponent } from '../interfaz-evaluaciones-profesor/interfaz-evaluaciones-profesor.component';
import { CommonModule } from '@angular/common';
import { ModalEstudiantesComponent } from '../../../shared/modal/modal-estudiantes/modal-estudiantes.component';

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
    let listaEstudiante = localStorage.getItem('logeado');
    let segundo: any = JSON.parse(listaEstudiante!);
    let tercero: any[] = JSON.parse(segundo.estudiantes!);
    console.log('Estudiantes,', tercero);
    tercero.forEach((value, index) => {
      this.relleno.push({
        indice: index + 1,
        cedula: value.cedula,
        nombreYapellido: value.nombreYapellido,
      });
    });
  }
  open() {
    const modalRef = this.modalService.open(ModalEstudiantesComponent);
    modalRef.result.then((value) => {
      console.log('text', value);
    });
  }
}
