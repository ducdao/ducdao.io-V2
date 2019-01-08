import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovesSarahHopkinsComponent } from './lovessarahhopkins.component';

describe('HomeComponent', () => {
  let component: LovesSarahHopkinsComponent;
  let fixture: ComponentFixture<LovesSarahHopkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovesSarahHopkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovesSarahHopkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
