import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { CommonModule } from '@angular/common';
import { InterfazAdminComponent } from './view/interfaz-admin/interfaz-admin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,CommonModule,InterfazAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';

}
