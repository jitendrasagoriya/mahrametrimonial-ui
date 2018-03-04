import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingsDetailsComponent } from './siblings-details.component';

describe('SiblingsDetailsComponent', () => {
  let component: SiblingsDetailsComponent;
  let fixture: ComponentFixture<SiblingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
