import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/models/country';
import { IEducation } from 'src/app/models/education';
import { IEmployment } from 'src/app/models/employment';
import { IGender } from 'src/app/models/gender';
import { IMaritalStatus } from 'src/app/models/maritalstatus';
import { Profile } from 'src/app/models/profile';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  profile: Profile = new Profile('y');
  countryes!: ICountry[];
  educations!: IEducation[];
  genders!: IGender[];
  maritals!: IMaritalStatus[];
  employments!: IEmployment[];
  days: number[] = [];
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
  years: number[] = [];
  selectedDay!: string;
  selectedMonth!: string;
  selectedYear!: string;

  constructor(private ap: ApiService) {

    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }

    for (let i = 1900; i <= 2022; i++) {
      this.years.push(i);
    }
    
  }

  ngOnInit(): void {
    this.getAllEmploymentType();
    this.getAllCountry();
    this.getAllEducation();
    this.getAllGender();
    this.getAllMaritalStatus();
  }

  getAllCountry() {
    this.ap.getAllCountry().subscribe(p => this.countryes = p);
  }

  getAllMaritalStatus() {
    this.ap.getAllMaritalStatus().subscribe(m => this.maritals = m);
  }

  getAllEducation() {
    this.ap.getAllEducation().subscribe(e => this.educations = e);
  }

  getAllGender() {
    this.ap.getAllGender().subscribe(g => this.genders = g);
  }

  getAllEmploymentType() {
    this.ap.getAllEmploymentType().subscribe(emp => this.employments = emp);
  }

  submit() {
    this.profile.dateOfBirth = `${this.selectedDay} ${this.selectedMonth} ${this.selectedYear}`;
    this.ap.createProfile(this.profile).subscribe(p => {
      alert('Save successfully');
    },
    e => alert("Profile error"));
  }

}
