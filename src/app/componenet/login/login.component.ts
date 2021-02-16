import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName!: string;
  password!: string;

  constructor(private api: ApiService, 
    private cs: CommonService,
    private router: Router) { }

    login() {
      this.api.login(this.userName, this.password).subscribe(t => {
        localStorage.setItem('token', t.access_token);
        this.cs.isLoggedIn$.next(true);

        localStorage.setItem('loggedInUser', t.userName);
        this.cs.loggedInUser$.next(t.userName);

        this.getLookupData();

        // alert("Login Successful");
        this.cs.showSnackBar("Login complete successful");

        this.router.navigate(['/']);
      },
      // e => alert("login error"))
      e => this.cs.showSnackBar("error message"));
    }

    getLookupData() {
      this.api.getAllCountry().subscribe(e => localStorage.setItem('countryes', JSON.stringify(e)));
      this.api.getAllEducation().subscribe(s => localStorage.setItem('educations', JSON.stringify(s)));
      this.api.getAllEmploymentType().subscribe(emp => localStorage.setItem('emptypes', JSON.stringify(emp)));
      this.api.getAllGender().subscribe(gen => localStorage.setItem('genders', JSON.stringify(gen)));
      this.api.getAllMaritalStatus().subscribe(mt => localStorage.setItem('maritalstatus', JSON.stringify(mt)));
    }
}
