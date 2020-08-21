import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';



let tocken='Bearer '+localStorage.getItem('id_token')
let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployeesList():Observable<any>
    {
          return  this.http.get("http://localhost:9002/getemployees");
    }
   
  deleteEmployee(id:number):Observable<any>
    {
      let httpParams = new HttpParams().set('id', id.toString());
      let options = { params: httpParams };
        return this.http.delete("http://localhost:9002/deleteemployee",options);
    }
    
}
