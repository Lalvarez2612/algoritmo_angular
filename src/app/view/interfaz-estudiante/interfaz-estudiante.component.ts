import { Component } from '@angular/core';
import { CreateUserModalComponent } from '../../shared/modal/create-user-modal/create-user-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuVerticalComponent } from '../layout/menu-vertical/menu-vertical.component';
import { MenuVerticalEstudianteComponent } from '../layout/menu-vertical-estudiante/menu-vertical-estudiante.component';

@Component({
  selector: 'app-interfaz-estudiante',
  standalone: true,
  imports: [MenuVerticalEstudianteComponent,NgbDatepickerModule,FormsModule, ReactiveFormsModule,CommonModule,CreateUserModalComponent],
  templateUrl: './interfaz-estudiante.component.html',
  styleUrl: './interfaz-estudiante.component.css'
})
export class InterfazEstudianteComponent {

  relleno: any[] = [];
  constructor() {}
estudiante:any;
curso: any; 
  ngOnInit(): void {
    let e = localStorage.getItem('logeado');
    console.log('vaer', e)
    this.estudiante = JSON.parse(e!);
    console.log('primero ', this.estudiante)
    this.curso = JSON.parse(this.estudiante.curso);
    console.log('Segundo ', this.curso)  
    this.relleno = this.curso.evaluaciones; 
     
  }
  // open() {
  //   const modalRef = this.modalService.open(ModalEstudiantesComponent);
  //   modalRef.result.then((value) => {
  //     this.relleno = [];
  //     this.estudiante = JSON.parse(localStorage.getItem(value.cedula)!);
  //     let curso = JSON.parse(this.estudiante.curso);
  //     let materias = curso.evaluaciones;
  //     this.relleno = materias;
  //   });
  // }

}
