import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtbyautComponent } from './artbyaut.component';

describe('ArtbyautComponent', () => {
  let component: ArtbyautComponent;
  let fixture: ComponentFixture<ArtbyautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtbyautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtbyautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
