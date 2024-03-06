import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './create-user-modal.component.html',
  styleUrl: './create-user-modal.component.css'
})
export class CreateUserModalComponent {
  constructor(public activeModal: NgbActiveModal,private fb:FormBuilder, private router:Router) { }

  formulario!: FormGroup;

    ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.formulario = this.fb.group({
      nombreYapellido:new FormControl('',[Validators.required]),
      cedula:new FormControl('',[Validators.required]),
      contrasena:new FormControl('',[Validators.required]),
    });
  }


}
