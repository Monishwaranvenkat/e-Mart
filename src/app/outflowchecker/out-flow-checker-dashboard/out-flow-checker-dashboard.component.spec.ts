import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFlowCheckerDashboardComponent } from './out-flow-checker-dashboard.component';

describe('OutFlowCheckerDashboardComponent', () => {
  let component: OutFlowCheckerDashboardComponent;
  let fixture: ComponentFixture<OutFlowCheckerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutFlowCheckerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFlowCheckerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
