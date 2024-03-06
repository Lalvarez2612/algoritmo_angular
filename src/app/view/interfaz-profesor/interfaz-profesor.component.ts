import { Component } from '@angular/core';
import { MenuVerticalComponent } from '../layout/menu-vertical/menu-vertical.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUserModalComponent } from '../../shared/modal/create-user-modal/create-user-modal.component';

@Component({
  selector: 'app-interfaz-profesor',
  standalone: true,
  imports: [MenuVerticalComponent,NgbDatepickerModule,FormsModule, ReactiveFormsModule,CommonModule,CreateUserModalComponent],
  templateUrl: './interfaz-profesor.component.html',
  styleUrl: './interfaz-profesor.component.css'
})
export class InterfazProfesorComponent {

}
