import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalProfesorComponent } from './menu-vertical-profesor.component';

describe('MenuVerticalProfesorComponent', () => {
  let component: MenuVerticalProfesorComponent;
  let fixture: ComponentFixture<MenuVerticalProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuVerticalProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuVerticalProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
