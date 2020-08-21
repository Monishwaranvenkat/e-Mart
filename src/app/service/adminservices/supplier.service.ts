import { Supplier } from './../../model/Supplier';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

 


  constructor(private http:HttpClient) { }

  addSupplier(supplier:Supplier):Observable<any>
  {
    return this.http.post("http://localhost:9002/addsupplier",supplier,httpOptions);
  }

  getAllSupplier():Observable<Supplier[]>
  {
    return this.http.get<Supplier[]>("http://localhost:9002/getallsupplier");
  }

  getSupplierById(id:number)
  {

  }
  getSuppliersName():Observable<any>
  {
    return this.http.get("http://localhost:9002/getsuppliersbyname")
  }
  deleteSupplier(id:number):Observable<any>
    {
      console.log(id)
      let httpParams = new HttpParams().set('id', id.toString());
      let options = { params: httpParams };
        return this.http.delete("http://localhost:9002/deletesupplier",options);
    }
}
