import { Component } from '@angular/core';
import { CreateUserModalComponent } from '../../shared/modal/create-user-modal/create-user-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuVerticalComponent } from '../layout/menu-vertical/menu-vertical.component';

@Component({
  selector: 'app-interfaz-estudiante',
  standalone: true,
  imports: [MenuVerticalComponent,NgbDatepickerModule,FormsModule, ReactiveFormsModule,CommonModule,CreateUserModalComponent],
  templateUrl: './interfaz-estudiante.component.html',
  styleUrl: './interfaz-estudiante.component.css'
})
export class InterfazEstudianteComponent {

}
