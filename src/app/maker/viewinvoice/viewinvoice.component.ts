import { InvoiceService } from './../../service/makerservices/invoice.service';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/model/Supplier';
import { SupplierService } from 'src/app/service/adminservices/supplier.service';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.css']
})
export class ViewinvoiceComponent implements OnInit {
 
   suppliers:Supplier[]=[];
    invoice:Observable<any>;
    displayedColumns: string[] = ['id', 'Totalproducts','Amount','Timestamps', 'supplier','status','view'];


  constructor(private supplierService:SupplierService,private invoiceService:InvoiceService) {
    this.getSuppliers();
   }

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
         console.log(id+"=="+element.supplierid)
          company=element.companyname;
          return
       }
      
    });
       return company;

  }

}
