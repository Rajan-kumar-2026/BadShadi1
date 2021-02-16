import { Injectable } from '@angular/core';
import { IGender } from '../models/gender';
import { IMaritalStatus } from '../models/maritalstatus';
import { IEducation } from '../models/education';
import { ICountry } from '../models/country';
import { IEmployment } from '../models/employment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getEducationText(id: number): string | undefined {
    
    const strEducations = localStorage.getItem('educations');
    
    if (!!strEducations) {
      const educations = JSON.parse(strEducations) as IEducation[];

      const education = educations.find(e => e.id === id);

      return education?.name;
    }

    return undefined;

  }

  getCountryText(id: number): string | undefined {

    const keepCountryes = localStorage.getItem('countryes');

    if (!!keepCountryes) {
      const countryes = JSON.parse(keepCountryes) as ICountry[];

      const country = countryes.find(c => c.id === id);

      return country?.name;
    }

    return undefined;
  } 

  getEmploymentText(id: number): string | undefined {
    const storeEmployments = localStorage.getItem('employments');

    if (!!storeEmployments) {
      const emps = JSON.parse(storeEmployments) as IEmployment[];

      const employment = emps.find(emp => emp.id === id);

      return employment?.name;
    }

    return undefined;
  }

  getGenderText(id: number): string | undefined {
    const storeGenders = localStorage.getItem('genders');

    if (!!storeGenders) {
      const emps = JSON.parse(storeGenders) as IGender[];

      const gender = emps.find(g => g.id === id);

      return gender?.name;
    }

    return undefined;
  }

  getMaritalStatusText(id: number): string | undefined {
    const storeMaritalStatus = localStorage.getItem('maritalstatus');

    if (!!storeMaritalStatus) {
      const maritals = JSON.parse(storeMaritalStatus)  as IMaritalStatus[]; 

      const marital = maritals.find(m => m.id === id);

      return marital?.name;
    }

    return undefined;
  }
}
