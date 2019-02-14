import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerarticleComponent } from './listerarticle.component';

describe('ListerarticleComponent', () => {
  let component: ListerarticleComponent;
  let fixture: ComponentFixture<ListerarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
