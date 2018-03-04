import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicityDetailComponent } from './ethnicity-detail.component';

describe('EthnicityDetailComponent', () => {
  let component: EthnicityDetailComponent;
  let fixture: ComponentFixture<EthnicityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthnicityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
