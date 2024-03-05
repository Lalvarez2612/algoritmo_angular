import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.formInit();
    console.log("hola pasando")
  }
  formInit() {
    this.formulario = this.fb.group({
      cedula:new FormControl('28434540'),
      contraseña:new FormControl('1234'),
    });
  }
  login() {
    console.log("Login =>",this.formulario.value)
  }
  restablecer() {
    console.log("restablercer =>",this.formulario.value)
  }
}
