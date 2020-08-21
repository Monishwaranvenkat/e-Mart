import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFlowCheckerrootComponent } from './out-flow-checkerroot.component';

describe('OutFlowCheckerrootComponent', () => {
  let component: OutFlowCheckerrootComponent;
  let fixture: ComponentFixture<OutFlowCheckerrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutFlowCheckerrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFlowCheckerrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
