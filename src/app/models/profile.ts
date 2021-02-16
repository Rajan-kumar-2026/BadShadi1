export class Profile {
    id!: number;
    firstName!: string;
    lastName!: string;
    mobileNumber!: number;
    email!: string;
    dateOfBirth!: string; 
    countryId!: number;
    genderId!: number;
    educationId!: number;
    maritalStatusId!:number;
    employmentTypeId!: number;
    jobTitle!: string;
    mobileNumVisibility!: string;

    constructor(show: string) {
        this.mobileNumVisibility = show;
    }

}