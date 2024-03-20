import { NgbActiveModal, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-evaluacion-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,NgbDatepickerModule],
  templateUrl: './create-evaluacion-modal.component.html',
  styleUrl: './create-evaluacion-modal.component.css'
})
export class CreateEvaluacionModalComponent {
  constructor(public activeModal: NgbActiveModal,private fb:FormBuilder, private router:Router) { }

  formulario!: FormGroup;

    ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.formulario = this.fb.group({
      tema:new FormControl('',[Validators.required]),
      porcentaje:new FormControl('20%',[Validators.required]),
      fecha:new FormControl('',[Validators.required]),
      calificacion:new FormControl(0),
    });
  }


}
