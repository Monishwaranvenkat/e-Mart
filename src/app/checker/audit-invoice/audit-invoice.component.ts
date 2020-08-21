import { Invoice } from './../../model/invoice';
import { SupplierService } from 'src/app/service/adminservices/supplier.service';
import { InvoiceService } from 'src/app/service/makerservices/invoice.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/model/Supplier';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-audit-invoice',
  templateUrl: './audit-invoice.component.html',
  styleUrls: ['./audit-invoice.component.css']
})
export class AuditInvoiceComponent implements OnInit {

    @ViewChild(MatSort) sort: MatSort;
   displayedColumns: string[] = ['sno', 'productname','productCategory', 'count','cost','currency','expiryDate','vendorCode','action'];
   acceptedDisplayedColumns: string[] = ['sno', 'productname','productCategory', 'count','cost','currency','expiryDate','vendorCode'];
   reurnDisplayedColumns: string[] = ['sno', 'productname','productCategory', 'count','cost','currency','expiryDate','vendorCode','reason'];
   returnColumns: string[] = ['id', 'productDescription','productCategory','cost','action'];
   suppliers:Supplier[]=[];
   invoice:Invoice=new Invoice();
   returnList:any=[];
   acceptedList:any=[];
   returnListDataSource=new MatTableDataSource<Object>(this.returnList);
   firstFormGroup: FormGroup;

  constructor(private router:Router,private _formBuilder: FormBuilder,private invoiceService:InvoiceService,private supplierService:SupplierService) { 
    this.getSuppliers()
  }
  

  ngOnInit(): void {
   if(!history.state.id)
   {
     this.router.navigate(['/checker/incominginvoice'])
   }else{
      this.invoiceService.getInvoiceById(history.state.id).subscribe(invoice=>{
      this.invoice=invoice;
    });
   }  
   this.returnListDataSource.sort = this.sort;
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


 return(product)
  {
   
    product.status="RETURN";
    this.returnList.push(product)
    //this.returnList=this.returnList.filter(item => item  )
    this.returnListDataSource.data = this.returnList;
    this.returnListDataSource.sort = this.sort;
  }

  cancelReturn(element){
    element.status="ACCEPTED";
    this.returnList=this.returnList.filter(item => item.status ==="RETURN" );
    this.returnListDataSource.data = this.returnList;
    this.returnListDataSource.sort = this.sort;
    
  }

  loadAcceptedList()
  {
   this.acceptedList= this.invoice.invoiceSummaries.filter(o => o.status!=="RETURN")
    this.acceptedList.forEach(element => {
      element.status="ACCEPTED"
    });
    
  }

  submit()
  {
    this.invoiceService.verifyInvoice(this.invoice).subscribe(result=>{
        alert("Added successfully")
        location.reload(true);
      },(error:HttpErrorResponse)=>{
          
      });
    
  }

}
