import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private api: ApiService, private cs: CommonService) { }
 
  registration() {
    this.api.registerUser(this.email, this.password, this.confirmPassword).subscribe(t => {
      // alert("Registration successful");    
      this.cs.showSnackBar("Registration successful save");
    },
    // e => alert(e.message));
    e => this.cs.showSnackBar(e.message));
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
