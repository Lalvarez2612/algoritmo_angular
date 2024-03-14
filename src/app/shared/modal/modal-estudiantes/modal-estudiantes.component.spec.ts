import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstudiantesComponent } from './modal-estudiantes.component';

describe('ModalEstudiantesComponent', () => {
  let component: ModalEstudiantesComponent;
  let fixture: ComponentFixture<ModalEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEstudiantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
