import { Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { InterfazAdminComponent } from './view/interfaz-admin/interfaz-admin.component';
import { InterfazEstudianteComponent } from './view/interfaz-estudiante/interfaz-estudiante.component';
import { InterfazProfesorComponent } from './view/interfaz-profesor/interfaz-profesor.component';


export const routes: Routes = [
  { path: '',title:"LogIn Page", component: LoginComponent },
  { path: 'admin',title:"Admin Page", component: InterfazAdminComponent },
  { path: 'estudiantes',title:"Estudiante Page", component: InterfazEstudianteComponent },
  { path: 'profesor',title:"Profesor Page", component: InterfazProfesorComponent },
];
