import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from 'express';

@Component({
  selector: 'app-modal-estudiantes',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,NgbDatepickerModule],
  templateUrl: './modal-estudiantes.component.html',
  styleUrl: './modal-estudiantes.component.css'
})
export class ModalEstudiantesComponent {
  constructor(public activeModal: NgbActiveModal,private fb:FormBuilder, private router:Router) { }
  formulario!: FormGroup;

  ngOnInit(): void {
  this.formInit();
}

formInit() {
  this.formulario= this.fb.group({
    estudiante:new FormControl('',[Validators.required]),
  });
}

}
