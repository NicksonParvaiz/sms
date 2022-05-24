import { StudentFilterService } from './../Modules/shared/student-filter/student-filter.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private studentFilterService: StudentFilterService) { }

  students = [
    {
      RollNo: 101, Name: 'John', FatherName: 'Ericson', Class: '3rd', Section: 'Green', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'johneric@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 102, Name: 'Nick', FatherName: 'James', Class: '4rd', Section: 'Blue', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'nick@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: true
    },
    {
      RollNo: 103, Name: 'Farhan', FatherName: 'Ramzan', Class: '1st', Section: 'Red', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'farhan@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 101, Name: 'John', FatherName: 'Ericson', Class: '3rd', Section: 'Green', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'johneric@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 102, Name: 'Nick', FatherName: 'James', Class: '4rd', Section: 'Blue', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'nick@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: true
    },
    {
      RollNo: 103, Name: 'Farhan', FatherName: 'Ramzan', Class: '1st', Section: 'Red', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'farhan@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 101, Name: 'John', FatherName: 'Ericson', Class: '3rd', Section: 'Green', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'johneric@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 102, Name: 'Nick', FatherName: 'James', Class: '4rd', Section: 'Blue', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'nick@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: true
    },
    {
      RollNo: 103, Name: 'Farhan', FatherName: 'Ramzan', Class: '1st', Section: 'Red', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'farhan@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 101, Name: 'John', FatherName: 'Ericson', Class: '3rd', Section: 'Green', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'johneric@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 102, Name: 'Nick', FatherName: 'James', Class: '4rd', Section: 'Blue', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'nick@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: true
    },
    {
      RollNo: 103, Name: 'Farhan', FatherName: 'Ramzan', Class: '1st', Section: 'Red', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'farhan@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 101, Name: 'John', FatherName: 'Ericson', Class: '3rd', Section: 'Green', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'johneric@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
    {
      RollNo: 102, Name: 'Nick', FatherName: 'James', Class: '4rd', Section: 'Blue', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'nick@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: true
    },
    {
      RollNo: 103, Name: 'Farhan', FatherName: 'Ramzan', Class: '1st', Section: 'Red', ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567', Email: 'farhan@gmail.com', Address: 'Korangi Karachi', DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9', FeeStatus: false
    },
  ];

  get() {
    return this.students;
  }

  search(searchInp: string) {
    return this.students.filter(
      x =>
        x.RollNo.toString().includes(searchInp) ||
        x.Name.toUpperCase().includes(searchInp.toUpperCase()) ||
        x.FatherName.toUpperCase().includes(searchInp.toUpperCase()) ||
        x.Class.toUpperCase().includes(searchInp.toUpperCase())
    )
  }

  filter(){
    let cretaria = this.studentFilterService.filterCriteria;
    // return this.students.filter(
    //   x =>
    //   x.Class.toUpperCase().includes(cretaria.class.toUpperCase())
    // )
    console.log(cretaria);
  }



}
