import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyBalanceComponent } from './yearly-balance.component';

describe('YearlyBalanceComponent', () => {
  let component: YearlyBalanceComponent;
  let fixture: ComponentFixture<YearlyBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
