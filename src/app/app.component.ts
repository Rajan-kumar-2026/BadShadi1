import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn!: boolean;

  constructor(public cs: CommonService, private router: Router) {
    this.cs.isLoggedIn$.subscribe(l => this.isLoggedIn = l);
  }

  logOut() 
  {
    localStorage.clear();
    this.cs.isLoggedIn$.next(false);
    this.cs.loggedInUser$.next(null);

    alert("logout Successful");

    this.router.navigate(['']);
    
  }
  
}
