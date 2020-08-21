import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerrootComponent } from './makerroot.component';

describe('MakerrootComponent', () => {
  let component: MakerrootComponent;
  let fixture: ComponentFixture<MakerrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
