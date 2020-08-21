import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkerroot',
  templateUrl: './checkerroot.component.html',
  styleUrls: ['./checkerroot.component.css']
})
export class CheckerrootComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    logout()
  {
    
    sessionStorage.removeItem("basicauth")
      this.router.navigate(['/'])
  }

}
