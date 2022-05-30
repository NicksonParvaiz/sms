import { StudentFilterService } from './../Modules/shared/student-filter/student-filter.service';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Student } from '../models/Student.model';
import { StudentFilter } from '../models/StudentFilter.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private location: Location,

  ) { }

  students = [
    {
      RollNo: 101,
      Name: 'John',
      FatherName: 'Ericson',
      Class: '1st',
      Section: 'Red',
      ClassTeacher: 'Sir Farhan',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },
    {
      RollNo: 102,
      Name: 'Rabeet',
      FatherName: 'Asad',
      Class: '1st',
      Section: 'Green',
      ClassTeacher: 'Sir Asalam',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'UnPaid'
    },
    {
      RollNo: 103,
      Name: 'Ansar',
      FatherName: 'Asad',
      Class: '1st',
      Section: 'Blue',
      ClassTeacher: 'Sir Subhan',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },
    {
      RollNo: 104,
      Name: 'Junaid',
      FatherName: 'Akhtar',
      Class: '1st',
      Section: 'Yellow',
      ClassTeacher: 'Sir Moiz',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'UnPaid'
    },



    {
      RollNo: 105,
      Name: 'Zain',
      FatherName: 'Ali',
      Class: '2nd',
      Section: 'Red',
      ClassTeacher: 'Sir Shariq',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },
    {
      RollNo: 106,
      Name: 'Hassan',
      FatherName: 'Ali',
      Class: '2nd',
      Section: 'Green',
      ClassTeacher: 'Sir Shahrukh',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'UnPaid'
    },
    {
      RollNo: 107,
      Name: 'Anus',
      FatherName: 'Khan',
      Class: '2nd',
      Section: 'Blue',
      ClassTeacher: 'Sir Nabeel',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },
    {
      RollNo: 108,
      Name: 'Maaz',
      FatherName: 'Khan',
      Class: '2nd',
      Section: 'Yellow',
      ClassTeacher: 'Sir Luke',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },



    {
      RollNo: 109,
      Name: 'Mubashir',
      FatherName: 'Saleem',
      Class: '3rd',
      Section: 'Red',
      ClassTeacher: 'Sir Wajahat',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },
    {
      RollNo: 110,
      Name: 'Hammad',
      FatherName: 'Khan',
      Class: '3rd',
      Section: 'Green',
      ClassTeacher: 'Sir Shuja',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },
    {
      RollNo: 111,
      Name: 'Moin',
      FatherName: 'Ali',
      Class: '3rd',
      Section: 'Blue',
      ClassTeacher: 'Sir Sarfaraz',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'Paid'
    },
    {
      RollNo: 112,
      Name: 'Shahbaz',
      FatherName: 'Khan',
      Class: '3rd',
      Section: 'Yellow',
      ClassTeacher: 'Sir Waqar',
      Phone: '0342-1234567',
      Email: 'johneric@gmail.com',
      Address: 'Korangi Karachi',
      DateOfBirth: '12th May 2016',
      CNIC: '42201-12345678-9',
      FeeStatus: 'UnPaid'
    },

  ];

  filteredStudents: Student[] = [];

  get() {
    return this.students;
  }

  search(searchInp: string) {

    if (searchInp !== '') {

      return this.filteredStudents.filter(
        x =>
          x.RollNo.toString().includes(searchInp) ||
          x.Name.toUpperCase().includes(searchInp.toUpperCase()) ||
          x.FatherName.toUpperCase().includes(searchInp.toUpperCase()) ||
          x.Class.toUpperCase().includes(searchInp.toUpperCase()) ||
          x.ClassTeacher.toUpperCase().includes(searchInp.toUpperCase()) ||
          x.Section.toUpperCase().includes(searchInp.toUpperCase())
      )
    }
    else {
      return this.filteredStudents;
    }
  }

  filteringStudent(FilterCriteria: StudentFilter) {



    if (FilterCriteria.Class === '' || FilterCriteria.Class === 'All') {

      this.filteredStudents = this.students;

    }
    else {
      this.filteredStudents = this.students.filter(x =>
        x.Class === FilterCriteria.Class
      )
    }

    if (FilterCriteria.ClassTeacher !== '' && FilterCriteria.ClassTeacher !== 'All') {

      this.filteredStudents = this.filteredStudents.filter(x =>
        x.ClassTeacher === FilterCriteria.ClassTeacher
      );
      

    }
    else { }
    if (FilterCriteria.Section !== '' && FilterCriteria.Section !== 'All') {
      this.filteredStudents = this.filteredStudents.filter(x =>
        x.Section === FilterCriteria.Section
      )
    } else { }

    if (FilterCriteria.FeeStatus !== '' && FilterCriteria.FeeStatus !== 'All') {
      this.filteredStudents = this.filteredStudents.filter(x =>
        x.FeeStatus === FilterCriteria.FeeStatus
      )
    } else { }



    return this.filteredStudents;


  }

  updatedStudent: Student;
  update(data: any) {

    let index = this.students.findIndex((student) => {
      return student.RollNo == data.RollNo;
    })

    this.updatedStudent = {
      RollNo: 12,
      Name: data.Name,
      FatherName: data.FatherName,
      Class: data.Class,
      Section: data.Section,
      ClassTeacher: data.ClassTeacher,
      Phone: data.Phone,
      Email: data.Email,
      Address: data.Address,
      DateOfBirth: data.DateOfBirth,
      CNIC: data.CNIC,
      FeeStatus: data.FeeStatus

    }



    this.location.back();

  }


}
