import { Supplier } from './../../model/Supplier';
import { SupplierService } from './../../service/adminservices/supplier.service';
import { FileUploadService } from '../../service/makerservices/file-upload.service';
import { Component, OnInit, ViewChild, ElementRef, SystemJsNgModuleLoader } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-uploadinvoice',
  templateUrl: './uploadinvoice.component.html',
  styleUrls: ['./uploadinvoice.component.css']
})
export class UploadinvoiceComponent implements OnInit {
  
  onChange: Function;
  private file: File= null;  
  progress = false;
  progressvalue=0;
  suppliers:Supplier[]=[];
  uploadfile:FormGroup;
  

  constructor(private formBuilder: FormBuilder,private uploadService: FileUploadService,private supplierService:SupplierService) {
    this.getSuppliers();
   }

  ngOnInit(): void {
    
    this.uploadfile = this.formBuilder.group({
    supplier: ["", Validators.required],
    fileUploads: ["",[Validators.required]]
  });
  }

  getSuppliers()
  {
    this.supplierService.getSuppliersName().subscribe(row=>{
      this.suppliers=row;
    });
  }

  

  uploadFile()
  {
    if(this.uploadfile.invalid ||this.file==null)
    {
      window.alert("all fields must be filled")
      console.log("invaild")
     return;
    }
  
        const formData = new FormData();  
    formData.append('file', this.file);  
    formData.append("supplierid",this.uploadfile.value.supplier)
     
    this.progress = true;  
    this.uploadService.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            this.progressvalue = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
           alert("File uploaded Successfully")
          location.reload 
        }  
      });  
      
  
    
  }
  


  
  loadFile(files:File[])
  {
    this.file=files[0]
  }

  requiredFileType( type: string ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }
      
      return null;
    }

    return null;
  };
}




}
