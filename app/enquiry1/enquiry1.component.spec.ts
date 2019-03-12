import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enquiry1Component } from './enquiry1.component';

describe('Enquiry1Component', () => {
  let component: Enquiry1Component;
  let fixture: ComponentFixture<Enquiry1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enquiry1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enquiry1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
