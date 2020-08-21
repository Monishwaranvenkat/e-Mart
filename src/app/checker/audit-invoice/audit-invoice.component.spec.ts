import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditInvoiceComponent } from './audit-invoice.component';

describe('AuditInvoiceComponent', () => {
  let component: AuditInvoiceComponent;
  let fixture: ComponentFixture<AuditInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
