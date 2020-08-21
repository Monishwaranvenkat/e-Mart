import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';



// interface Role {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.css']
})
export class AddinvoiceComponent implements OnInit {

  //  hide = true;
  // role: Role[] = [
  //   {value: 'ROLE_MAKER', viewValue: 'Maker'},
  //   {value: 'ROLE_CHECKER', viewValue: 'Checker'},
  //   {value: 'Role_ADMIN', viewValue: 'Admin'},
  //    {value: 'Role_USER', viewValue: 'USER'}
  // ];
   signUpForm:FormGroup
  // isLoading = false;
  constructor(private formBuilder: FormBuilder,private router: Router,private authservice:AuthenticationServiceService) { }

  ngOnInit(): void {
    
  //   this.signUpForm = this.formBuilder.group({
  //     password:['',Validators.required],
  //     role:['',Validators.required],
  //     employeeDetails:this.formBuilder.group({
  //               name: ['', Validators.required],
  //               email: ['', [Validators.email, Validators.required]],
  //               dob: ['',[Validators.required]],
  //               hiredate:['',[Validators.required]],
  //           }),
  //   });
   }


  //  onSubmit() 
  //  {
  //   if (this.signUpForm.invalid || this.isLoading) {
  //     return;
  //   }
  //   this.isLoading = true;
  //   console.log(JSON.stringify(this.signUpForm.value))
  //   this.authservice.register(this.signUpForm.value).subscribe(result=>{
  //       alert("Registered success")
  //     },(error:HttpErrorResponse)=>{
  //         alert(error.message);
  //     })
  //  }

  //  device:number = 1;
  
  
}
