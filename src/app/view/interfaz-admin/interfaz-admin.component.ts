import { Component, OnInit } from '@angular/core';
import { MenuVerticalComponent } from "../layout/menu-vertical/menu-vertical.component";
import { NgbDateStruct, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateUserModalComponent } from '../../shared/modal/create-user-modal/create-user-modal.component';
import { __values } from 'tslib';


@Component({
    selector: 'app-interfaz-admin',
    standalone: true,
    templateUrl: './interfaz-admin.component.html',
    styleUrl: './interfaz-admin.component.css',
    imports: [MenuVerticalComponent,NgbDatepickerModule,FormsModule, ReactiveFormsModule,CommonModule,CreateUserModalComponent]
})
export class InterfazAdminComponent implements OnInit{
  model!: NgbDateStruct;
  estudianteList: any[]=[];
  profesorList: any[]=[];
  formulario!: FormGroup;
  constructor(private fb:FormBuilder, private router:Router,private modalService: NgbModal) {}
  ngOnInit(): void {
    this.formInit();
  }
  formInit() {
    this.formulario = this.fb.group({
      nombreCurso:new FormControl('',[Validators.required]),
      unidadesCredito:new FormControl('',[Validators.required]),
      cantidadHoras:new FormControl('',[Validators.required]),
      fechaInicio:new FormControl('',[Validators.required]),
      fechaFin:new FormControl('',[Validators.required]),
    });
  }
  open() {
    const modalRef = this.modalService.open(CreateUserModalComponent);
    modalRef.result.then(value=>{
      console.log("text", value);
      if (value !=null){
        this.estudianteList.push({...value,rol:'estudiantes'});
      }
    })
  }
  openProfesores() {
    const modalRef = this.modalService.open(CreateUserModalComponent);
    modalRef.result.then(value=>{
      console.log("text", value);
      if (value !=null){
        let profe = localStorage.getItem(value.cedula);
        if (this.profesorList.length > 0){
          alert("No se puede agregar más de un profesor por curso");
        }else if (profe != null) {
          alert("No se puede agregar al profesor: "+value.cedula+" Ya posee un curso asignado");
        }else {
          this.profesorList.push({...value,rol:'profesor'});
        }
      }
    })
  }
  guardar(){
    this.estudianteList.map(__values=>{
      localStorage.setItem(__values.cedula,JSON.stringify({...__values,rol:'estudiantes','curso':JSON.stringify(this.formulario.value)}));
    });
    this.profesorList.map(__values=>{
    localStorage.setItem(__values.cedula,JSON.stringify({...__values,rol:'profesor','curso':JSON.stringify(this.formulario.value),
    'estudiantes':JSON.stringify(this.estudianteList)}));
  });
  alert("Sus cambios se han guardado exitosamente");
  this.formulario.reset();
  this.estudianteList = [];
  this.profesorList = [];
}
}
