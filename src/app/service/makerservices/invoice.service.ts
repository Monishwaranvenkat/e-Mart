import { Invoice } from './../../model/invoice';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {   }

     getInvoice():Observable<any>
    {
      
          return  this.http.get("http://localhost:9002/getinvoice");
    }
    getInvoiceById(id):Observable<any>{
      
       let httpParams = new HttpParams().set('id', id.toString());
       let options = { params: httpParams };
       return  this.http.get("http://localhost:9002/getinvoicebyid",options);

    }
     getInvoiceByIddemo(id){
       let httpParams = new HttpParams().set('id', id.toString());
       let options = { params: httpParams };
      return  this.http.get<Invoice> ("http://localhost:9002/getinvoicebyid",options)
    }

    verifyInvoice(invoice)
    {
      console.log("service")
      return this.http.post("http://localhost:9002/test",invoice)
    }
}
