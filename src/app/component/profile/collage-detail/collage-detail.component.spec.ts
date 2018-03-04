import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageDetailComponent } from './collage-detail.component';

describe('CollageDetailComponent', () => {
  let component: CollageDetailComponent;
  let fixture: ComponentFixture<CollageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
