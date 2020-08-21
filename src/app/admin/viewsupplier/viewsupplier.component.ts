import { SupplierService } from './../../service/adminservices/supplier.service';
import { Observable } from 'rxjs';
import { Supplier } from './../../model/Supplier';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-viewsupplier',
  templateUrl: './viewsupplier.component.html',
  styleUrls: ['./viewsupplier.component.css']
})
export class ViewsupplierComponent implements OnInit {

  displayedColumns: string[] = ['Companyname', 'email','phone', 'repname','address','Edit','Delete'];
  supplier:Observable<any>
  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.reload()
  }
  editSupplier(element)
  {

  }
  deleteSupplier(id){
    console.log(id)
    this.supplierService.deleteSupplier(id).subscribe(result=>{
        this.reload();
      },(error:HttpErrorResponse)=>{
     console.log(error.error.error)
        alert(error.status);
        this.reload();
      })

  }

  reload()
  {
    this.supplier = this.supplierService.getAllSupplier();
     console.log(this.supplier);
  }
 

}
