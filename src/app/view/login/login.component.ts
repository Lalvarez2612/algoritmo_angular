import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  constructor(private fb:FormBuilder, private router:Router) {}
  ngOnInit(): void {
    this.formInit();
  }
  formInit() {
    this.formulario = this.fb.group({
      cedula:new FormControl('',[Validators.required]),
      contraseña:new FormControl('',[Validators.required]),
    });
  }
  login() {
  /// Verificar si la cedula existe
    console.log("Este es mi cedula",this.formulario.get('cedula')?.value)
    let isAccount = localStorage.getItem(this.formulario.get('cedula')?.value)
    console.log("tienes cuenta",isAccount)
      /// validar si puedes ingresar
      if(isAccount ==null){
        alert("No estas registrado")
      }else{
        const data = localStorage.getItem(this.formulario.get('cedula')?.value);
      let formularioCedula = JSON.parse(data!);
        if(formularioCedula.contraseña == this.formulario.get('contraseña')?.value){
          this.router.navigate(['pag2'])
        }else{
          alert("Contraseña invalida")
        }
      }
  /// Ir hacia otra pagina
  }
  restablecer() {

  }
}
