import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationServiceService } from './../authentication-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgroup:FormGroup

  constructor(private authservice:AuthenticationServiceService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.formgroup=new FormGroup(

      {
        username:new FormControl("",[Validators.required,Validators.email]),
        password:new FormControl("",[Validators.required])
      }
    )
  }

  login()
  {
    if(this.formgroup.valid)
    {

      this.authservice.login(this.formgroup.value).subscribe(result=>{
        console.log(result.role)
        if(result.role==="ROLE_ADMIN")
        {
             this.router.navigate(['/admin'])  
        }else if(result.role==="ROLE_MAKER")
        {
             this.router.navigate(['/maker'])  
        }else if(result.role==="ROLE_CHECKER")
        {
             this.router.navigate(['/checker'])  
        }
           
      },(error:HttpErrorResponse)=>{
         // console.log(error.error.error)
          alert(error.error.message);
      })
    }
  }
  

}
