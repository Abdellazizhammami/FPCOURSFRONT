import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LireartComponent } from './lireart.component';

describe('LireartComponent', () => {
  let component: LireartComponent;
  let fixture: ComponentFixture<LireartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LireartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LireartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
