import { Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { InterfazAdminComponent } from './view/interfaz-admin/interfaz-admin.component';


export const routes: Routes = [
  { path: '',title:"LogIn Page", component: LoginComponent },
  { path: 'pag2',title:"Admin Page", component: InterfazAdminComponent },
];
