import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEvaluacionModalComponent } from './create-evaluacion-modal.component';

describe('CreateEvaluacionModalComponent', () => {
  let component: CreateEvaluacionModalComponent;
  let fixture: ComponentFixture<CreateEvaluacionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEvaluacionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEvaluacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
