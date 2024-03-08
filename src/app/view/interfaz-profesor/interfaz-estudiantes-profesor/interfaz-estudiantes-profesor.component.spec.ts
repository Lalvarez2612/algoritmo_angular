import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazEstudiantesProfesorComponent } from './interfaz-estudiantes-profesor.component';

describe('InterfazEstudiantesProfesorComponent', () => {
  let component: InterfazEstudiantesProfesorComponent;
  let fixture: ComponentFixture<InterfazEstudiantesProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazEstudiantesProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazEstudiantesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
