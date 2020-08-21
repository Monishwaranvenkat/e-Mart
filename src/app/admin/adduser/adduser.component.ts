import { Employee } from './../../model/userdetail';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/authentication-service.service'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'



interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  hide = true;
  role: Role[] = [
    {value: 'ROLE_MAKER', viewValue: 'Maker'},
    {value: 'ROLE_CHECKER', viewValue: 'Checker'},
    {value: 'ROLE_ADMIN', viewValue: 'Admin'},
     {value: 'ROLE_USER', viewValue: 'USER'}
  ];
 
  signUpForm:FormGroup
  isLoading = false;
  constructor(private formBuilder: FormBuilder,private router: Router,private authservice:AuthenticationServiceService) { }

  ngOnInit(): void {
       this.signUpForm = this.formBuilder.group({
      password:['',Validators.required],
      role:['',Validators.required],
      employeeDetails:this.formBuilder.group({
                name: ['', Validators.required],
                email: ['', [Validators.email, Validators.required]],
                dob: ['',[Validators.required]],
                hiredate:['',[Validators.required]],
            }),
    });

  }
 
  
  onSubmit() 
   {
    if (this.signUpForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    console.log(JSON.stringify(this.signUpForm.value))
    this.authservice.register(this.signUpForm.value).subscribe(result=>{
        alert("Registered success")
        this.isLoading = false;
        location.reload(true);
      },(error:HttpErrorResponse)=>{
          this.isLoading =false;
      })
   }

}
