import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  panelOpenState=false;
  constructor(private router: Router,private authservice :AuthenticationServiceService) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.authservice.logout();
    this.router.navigate(['/']);
  }
}
