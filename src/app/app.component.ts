import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { CommonModule } from '@angular/common';
import { InterfazAdminComponent } from './view/interfaz-admin/interfaz-admin.component';
import { MenuVerticalComponent } from './view/layout/menu-vertical/menu-vertical.component';
import { InterfazEstudianteComponent } from './view/interfaz-estudiante/interfaz-estudiante.component';
import { InterfazProfesorComponent } from './view/interfaz-profesor/interfaz-profesor.component';
import { MenuVerticalProfesorComponent } from './view/layout/menu-vertical-profesor/menu-vertical-profesor.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LoginComponent,
    CommonModule,
    InterfazAdminComponent,
    MenuVerticalComponent,
    InterfazEstudianteComponent,
    InterfazProfesorComponent,
MenuVerticalProfesorComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
}
