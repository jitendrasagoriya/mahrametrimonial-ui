import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsDetailsComponent } from './habits-details.component';

describe('HabitsDetailsComponent', () => {
  let component: HabitsDetailsComponent;
  let fixture: ComponentFixture<HabitsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
