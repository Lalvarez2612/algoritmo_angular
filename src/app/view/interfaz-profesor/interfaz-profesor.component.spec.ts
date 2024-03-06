import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazProfesorComponent } from './interfaz-profesor.component';

describe('InterfazProfesorComponent', () => {
  let component: InterfazProfesorComponent;
  let fixture: ComponentFixture<InterfazProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
