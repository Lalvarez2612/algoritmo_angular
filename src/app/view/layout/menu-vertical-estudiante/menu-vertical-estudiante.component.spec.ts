import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalEstudianteComponent } from './menu-vertical-estudiante.component';

describe('MenuVerticalEstudianteComponent', () => {
  let component: MenuVerticalEstudianteComponent;
  let fixture: ComponentFixture<MenuVerticalEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuVerticalEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuVerticalEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
