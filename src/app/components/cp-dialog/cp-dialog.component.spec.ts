import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpDialogComponent } from './cp-dialog.component';

describe('CpDialogComponent', () => {
  let component: CpDialogComponent;
  let fixture: ComponentFixture<CpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
