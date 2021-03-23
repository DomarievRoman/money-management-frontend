import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCostComponent } from './income-cost.component';

describe('IncomeCostComponent', () => {
  let component: IncomeCostComponent;
  let fixture: ComponentFixture<IncomeCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
