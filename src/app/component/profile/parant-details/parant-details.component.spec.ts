import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParantDetailsComponent } from './parant-details.component';

describe('ParantDetailsComponent', () => {
  let component: ParantDetailsComponent;
  let fixture: ComponentFixture<ParantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
