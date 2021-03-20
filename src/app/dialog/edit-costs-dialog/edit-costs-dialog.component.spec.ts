import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostsDialogComponent } from './edit-costs-dialog.component';

describe('EditCostsDialogComponent', () => {
  let component: EditCostsDialogComponent;
  let fixture: ComponentFixture<EditCostsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCostsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCostsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
