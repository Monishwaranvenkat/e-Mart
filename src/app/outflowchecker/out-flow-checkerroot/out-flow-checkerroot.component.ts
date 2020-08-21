import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-out-flow-checkerroot',
  templateUrl: './out-flow-checkerroot.component.html',
  styleUrls: ['./out-flow-checkerroot.component.css']
})
export class OutFlowCheckerrootComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   logout()
  {
    
    sessionStorage.removeItem("basicauth")
      this.router.navigate(['/'])
  }


}
