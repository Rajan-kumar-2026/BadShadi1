import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEducation } from '../models/education';
import { ICountry } from '../models/country';
import { IEmployment } from '../models/employment';
import { IMaritalStatus } from '../models/maritalstatus';
import { IGender } from '../models/gender';
import { Profile } from '../models/profile';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc: HttpClient) { }

  getAllEducation(): Observable<IEducation[]> {
    return this.hc.get<IEducation[]>('http://localhost:44315/api/education/get');
  }

  getAllCountry(): Observable<ICountry[]> {
    return this.hc.get<ICountry[]>('http://localhost:44315/api/country/get');
  }

  getAllEmploymentType(): Observable<IEmployment[]> {
    return this.hc.get<IEmployment[]>('http://localhost:44315/api/employment/get');
  }

  getAllMaritalStatus(): Observable<IMaritalStatus[]> {
    return this.hc.get<IEmployment[]>('http://localhost:44315/api/marital/get');
  }

  getAllGender(): Observable<IGender[]> {
    return this.hc.get<IGender[]>('http://localhost:44315/api/gender/get');
  }

  createProfile(p: Profile): Observable<any> {
    return this.hc.post('http://localhost:44315/api/profile/create',p, this.httpOptions());
  }

  getMyProfile(): Observable<Profile> {
    return this.hc.get<Profile>('http://localhost:44315/api/profile/getmyprofile', this.httpOptions());
  }

  getByEmail(email: string): Observable<Profile> {
    return this.hc.get<Profile>(`http://localhost:44315/api/profile/getByEmail?email=${email}`, this.httpOptions());
  }

  registerUser(email: string, password: string, confirmPassword: string): Observable<any> {
    return this.hc.post('http://localhost:44315/api/Account/Register', { email: email, password: password, confirmPassword: confirmPassword });
  }

  getAllFafourites(): Observable<Profile[]> {
    return this.hc.get<Profile[]>('http://localhost:44315/api/favourite/getall', this.httpOptions());
  }

  isFavourite(id: number): Observable<boolean> {
    return this.hc.get<boolean>(`http://localhost:44315/api/favourite/isFavourite?id=${id}`, this.httpOptions());
  }

  makeFafourite(id: number): Observable<number> {
    return this.hc.post<number>(`http://localhost:44315/api/favourite/make?favUserId=${id}`, {}, this.httpOptions());
  }

  removeFafourite(id: number): Observable<number> {
    return this.hc.delete<number>(`http://localhost:44315/api/favourite/remove?favUserId=${id}`, this.httpOptions());
  }

  block(id: number): Observable<number> {
    return this.hc.post<number>(`http://localhost:44315/api/blocked/block?userIdToBlock=${id}`, {}, this.httpOptions());
  } 

  unblock(id: number): Observable<number> {
    return this.hc.delete<number>(`http://localhost:44315/api/blocked/unblock?userIdToUnblock=${id}`, this.httpOptions());
  }

  getAllBlocked(): Observable<Profile[]> {
    return this.hc.get<Profile[]>('http://localhost:44315/api/blocked/getall', this.httpOptions());
  }

  isBlocked(id: number): Observable<boolean> {
    return this.hc.get<boolean>(`http://localhost:44315/api/blocked/isBlocked?id=${id}`, this.httpOptions());
  }

  search(): Observable<Profile[]> {
    return this.hc.get<Profile[]>('http://localhost:44315/api/search/profiles', this.httpOptions());
  }

  login(userName: string, password: string): Observable<any> {
    const params = {
      grant_type: 'password',
      userName: userName,
      password: password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = { headers: headers };
    const body: string = this.encodeParams(params);
    return this.hc.post('http://localhost:44315/token', body, options);
  }

  private encodeParams(params: any): string {
    let body = '';
    for (const key in params) {
      if (body.length) {
        body += '&';
      }
      body += key + '=';
      body += encodeURIComponent(params[key]);
    }
    return body;
  }

  private httpOptions(): {
    headers: HttpHeaders;
  } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    };
  }
}
