import { SupplierService } from './../../service/adminservices/supplier.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {

   hide = true;
  supplierForm:FormGroup
  isLoading = false;
  constructor(private formBuilder: FormBuilder,private supplierservice:SupplierService) { }

 

  ngOnInit(): void {
    this.supplierForm = this.formBuilder.group({
      companyname:['',Validators.required],
      repname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      address:['',Validators.required]
    });

  }

  onSubmit() 
   {
     if (this.supplierForm.invalid || this.isLoading) {
       return;
     }
     this.isLoading = true;
     console.log(this.supplierForm.value)
         this.supplierservice.addSupplier(this.supplierForm.value).subscribe(result=>{
         alert("Registered success")
         this.isLoading = false;
         location.reload(true);
       })
   }


}
