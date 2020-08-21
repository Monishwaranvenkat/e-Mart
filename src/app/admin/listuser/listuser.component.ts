import { EmployeeService } from './../../service/adminservices/employee.service';
import { AdduserComponent } from './../adduser/adduser.component';
import { Employee } from './../../model/userdetail';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Email','Dob', 'Hiredate','Role','Locked','Active','Password','Edit','Delete'];
  employees:Observable<any>;
  
  constructor(private employeeService:EmployeeService,
    private dialog: MatDialog) {   }

  @ViewChild(MatSort) sort:MatSort;
  ngOnInit(): void {
      this.reload();
  }
  reload()
  {

    this.employees = this.employeeService.getEmployeesList();
    
  }


  deleteEmployee(id: number )
  {
     this.employeeService.deleteEmployee(id).subscribe(result=>{
        this.reload();
      },(error:HttpErrorResponse)=>{
     console.log(error.error.error)
        alert(error.status);
        this.reload();
   })
    
      
      
  }
  editEmployee(data:Employee)
  {
    console.log(data)
    this.reload();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdduserComponent,dialogConfig);
  }
}
