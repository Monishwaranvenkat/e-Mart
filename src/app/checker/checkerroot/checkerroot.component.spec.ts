import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerrootComponent } from './checkerroot.component';

describe('CheckerrootComponent', () => {
  let component: CheckerrootComponent;
  let fixture: ComponentFixture<CheckerrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckerrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
