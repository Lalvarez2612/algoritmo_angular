import { Component, OnInit } from '@angular/core';
import { MenuVerticalComponent } from "../layout/menu-vertical/menu-vertical.component";
import { NgbDateStruct, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateUserModalComponent } from '../../shared/modal/create-user-modal/create-user-modal.component';


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
        localStorage.setItem(value.cedula,JSON.stringify({...value,rol:'estudiantes'}));
      }
    })
  }
  openProfesores() {
    const modalRef = this.modalService.open(CreateUserModalComponent);
    modalRef.result.then(value=>{
      console.log("text", value);
      if (value !=null){
        this.profesorList.push({...value,rol:'profesor'});
        localStorage.setItem(value.cedula,JSON.stringify({...value,rol:'profesor'}));
      }
    })
  }
}

