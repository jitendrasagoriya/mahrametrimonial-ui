import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyValuesComponent } from './family-values.component';

describe('FamilyValuesComponent', () => {
  let component: FamilyValuesComponent;
  let fixture: ComponentFixture<FamilyValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
