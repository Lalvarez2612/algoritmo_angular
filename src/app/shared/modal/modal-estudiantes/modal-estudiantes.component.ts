import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { log } from 'console';


@Component({
  selector: 'app-modal-estudiantes',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,NgbDatepickerModule],
  templateUrl: './modal-estudiantes.component.html',
  styleUrl: './modal-estudiantes.component.css'
})
export class ModalEstudiantesComponent {
  constructor(public activeModal: NgbActiveModal,private fb:FormBuilder, private router:Router) { }
  tercero:any[]=[];
  formulario!: FormGroup;

  ngOnInit(): void {
  this.formInit();
  let listaEstudiante = localStorage.getItem('logeado');
  let segundo: any = JSON.parse(listaEstudiante!);
  this.tercero= JSON.parse(segundo.estudiantes!);
  console.log("imprime",this.tercero);
  
}

formInit() {
  this.formulario= this.fb.group({
    estudiante:new FormControl(null,[Validators.required]),
    cedula:new FormControl(null),
    nombreYapellido:new FormControl(null),

  });
  this.setdatos();
}

setdatos(){
  this.formulario.get("estudiante")?.valueChanges.subscribe(value=>{
    let item=this.tercero[value];
     this.formulario.get("cedula")?.setValue(item.cedula);
 this.formulario.get("nombreYapellido")?.setValue(item.nombreYapellido);
  })

  
}

}
