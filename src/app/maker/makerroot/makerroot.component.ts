import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makerroot',
  templateUrl: './makerroot.component.html',
  styleUrls: ['./makerroot.component.css']
})
export class MakerrootComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   logout()
  {
    
    sessionStorage.removeItem("basicauth")
      this.router.navigate(['/'])
  }

}
