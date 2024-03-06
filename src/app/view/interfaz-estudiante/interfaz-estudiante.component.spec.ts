import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazEstudianteComponent } from './interfaz-estudiante.component';

describe('InterfazEstudianteComponent', () => {
  let component: InterfazEstudianteComponent;
  let fixture: ComponentFixture<InterfazEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
