import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBlackComponent } from './error-black.component';

describe('ErrorBlackComponent', () => {
  let component: ErrorBlackComponent;
  let fixture: ComponentFixture<ErrorBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorBlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
