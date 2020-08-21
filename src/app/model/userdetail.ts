

  
 export class Employee {
    password: string;
    role: string;
    isactive:number=1;
    islocked:number=1;
    employeeDetails:employeedetails=new employeedetails();
   
}

export class employeedetails {
        name: string;
        email: string;
        dob: Date;
        hiredate: Date;
}


 