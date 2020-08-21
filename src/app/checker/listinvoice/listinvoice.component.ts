import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/service/adminservices/supplier.service';
import { InvoiceService } from 'src/app/service/makerservices/invoice.service';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/model/Supplier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listinvoice',
  templateUrl: './listinvoice.component.html',
  styleUrls: ['./listinvoice.component.css']
})
export class ListinvoiceComponent implements OnInit {

  suppliers:Supplier[]=[];
    invoice:Observable<any>;
    displayedColumns: string[] = ['id', 'Totalproducts','Amount','Timestamps', 'supplier','verify'];

  constructor(private supplierService:SupplierService,private invoiceService:InvoiceService,private router:Router) {  
    
    this.getSuppliers();}

  ngOnInit(): void {
    this.reload()
  }
  reload()
  {

    this.invoice = this.invoiceService.getInvoice();
   
  }

  getSuppliers()
  {
    
    this.supplierService.getSuppliersName().subscribe(row=>{
      this.suppliers=row;
    });
    
  }
  supplier(id){
   
     let company:String;
    this.suppliers.forEach(element => {
      
       if(id==element.supplierid)
       {
          company=element.companyname;
          return
       }
      
    });
       return company;

  }

  audit(id)
  {
    
    this.router.navigateByUrl('checker/auditinvoice', {state:{ id:id}}); 
  }

}
