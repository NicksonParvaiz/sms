import { filter } from 'rxjs';
import { Injectable } from '@angular/core';
import { Faculty } from '../models/Faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor() { }

  faculties = [

    {
      Id: 1001,
      Name: 'Subhan',
      FatherName: 'Waqar',
      Class: '5th',
      Phone: '0310-1234567',
      Email: 'subhanwaqar@gmail.com',
      Address: 'korangi crossing',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-1'
    },
    {
      Id: 1002,
      Name: 'Sana',
      FatherName: 'Aslam',
      Class: '3rd',
      Phone: '0310-1234568',
      Email: 'sanaaslam@gmail.com',
      Address: 'DHA 6',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-2'
    },
    {
      Id: 1003,
      Name: 'Emmanual',
      FatherName: 'Paul',
      Class: '4th',
      Phone: '0310-1234569',
      Email: 'emmanualpaul@gmail.com',
      Address: 'PECHS',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-3'
    },
    {
      Id: 1001,
      Name: 'Subhan',
      FatherName: 'Waqar',
      Class: '5th',
      Phone: '0310-1234567',
      Email: 'subhanwaqar@gmail.com',
      Address: 'korangi crossing',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-1'
    },
    {
      Id: 1002,
      Name: 'Sana',
      FatherName: 'Aslam',
      Class: '3rd',
      Phone: '0310-1234568',
      Email: 'sanaaslam@gmail.com',
      Address: 'DHA 6',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-2'
    },
    {
      Id: 1003,
      Name: 'Emmanual',
      FatherName: 'Paul',
      Class: '4th',
      Phone: '0310-1234569',
      Email: 'emmanualpaul@gmail.com',
      Address: 'PECHS',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-3'
    },
    {
      Id: 1001,
      Name: 'Subhan',
      FatherName: 'Waqar',
      Class: '5th',
      Phone: '0310-1234567',
      Email: 'subhanwaqar@gmail.com',
      Address: 'korangi crossing',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-1'
    },
    {
      Id: 1002,
      Name: 'Sana',
      FatherName: 'Aslam',
      Class: '3rd',
      Phone: '0310-1234568',
      Email: 'sanaaslam@gmail.com',
      Address: 'DHA 6',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-2'
    },
    {
      Id: 1003,
      Name: 'Emmanual',
      FatherName: 'Paul',
      Class: '4th',
      Phone: '0310-1234569',
      Email: 'emmanualpaul@gmail.com',
      Address: 'PECHS',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-3'
    },
    {
      Id: 1001,
      Name: 'Subhan',
      FatherName: 'Waqar',
      Class: '5th',
      Phone: '0310-1234567',
      Email: 'subhanwaqar@gmail.com',
      Address: 'korangi crossing',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-1'
    },
    {
      Id: 1002,
      Name: 'Sana',
      FatherName: 'Aslam',
      Class: '3rd',
      Phone: '0310-1234568',
      Email: 'sanaaslam@gmail.com',
      Address: 'DHA 6',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-2'
    },
    {
      Id: 1003,
      Name: 'Emmanual',
      FatherName: 'Paul',
      Class: '4th',
      Phone: '0310-1234569',
      Email: 'emmanualpaul@gmail.com',
      Address: 'PECHS',
      DateOfBirth: '20th Jan 1992',
      CNIC : '42201-1234567-3'
    },

  ];

  get() {
    return this.faculties;
  }

  search(searchInp: string) {
    return this.faculties.filter(
      x =>
        x.Id.toString().toUpperCase().includes(searchInp.toUpperCase()) ||
        x.Name.toUpperCase().includes(searchInp.toUpperCase()) ||
        x.Class.toUpperCase().includes(searchInp.toUpperCase()) ||
        x.FatherName.toUpperCase().includes(searchInp.toUpperCase())
    )
  }



}
