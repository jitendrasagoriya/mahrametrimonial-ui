import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeliefsystemDetailsComponent } from './beliefsystem-details.component';

describe('BeliefsystemDetailsComponent', () => {
  let component: BeliefsystemDetailsComponent;
  let fixture: ComponentFixture<BeliefsystemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeliefsystemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeliefsystemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
