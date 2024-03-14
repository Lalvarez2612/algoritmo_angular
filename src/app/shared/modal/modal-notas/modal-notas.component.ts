import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-notas',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,NgbDatepickerModule],
  templateUrl: './modal-notas.component.html',
  styleUrl: './modal-notas.component.css'
})
export class ModalNotasComponent {
  constructor(public activeModal: NgbActiveModal,private fb:FormBuilder, private router:Router) { }
  formulario!: FormGroup;

  ngOnInit(): void {
  this.formInit();
}

formInit() {
  this.formulario= this.fb.group({
    nota:new FormControl('',[Validators.required]),
  });
}


}
