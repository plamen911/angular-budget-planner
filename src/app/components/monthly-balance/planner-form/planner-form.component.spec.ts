import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerFormComponent } from './planner-form.component';

describe('PlannerFormComponent', () => {
  let component: PlannerFormComponent;
  let fixture: ComponentFixture<PlannerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
