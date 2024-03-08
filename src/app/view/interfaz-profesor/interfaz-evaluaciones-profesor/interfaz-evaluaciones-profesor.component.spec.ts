import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazEvaluacionesProfesorComponent } from './interfaz-evaluaciones-profesor.component';

describe('InterfazEvaluacionesProfesorComponent', () => {
  let component: InterfazEvaluacionesProfesorComponent;
  let fixture: ComponentFixture<InterfazEvaluacionesProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazEvaluacionesProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazEvaluacionesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
