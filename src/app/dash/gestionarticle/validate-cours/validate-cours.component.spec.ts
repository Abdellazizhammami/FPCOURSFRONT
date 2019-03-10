import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCoursComponent } from './validate-cours.component';

describe('ValidateCoursComponent', () => {
  let component: ValidateCoursComponent;
  let fixture: ComponentFixture<ValidateCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
