import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor() { }

  SelectAssignment : Assignment;
  assignments: Assignment[] = [
    {
      Id: 1,
      Title: 'Assignment 1',
      Description: 'description for assignment 1',
      Class: '3rd',
      ClassTeacher: 'Sir Subhan',
      Section: 'Green',
    },
    {
      Id: 2,
      Title: 'Assignment 2',
      Description: 'description for assignment 2',
      Class: '4th',
      ClassTeacher: 'Mis Sana',
      Section: 'Yellow',
    },
    {
      Id: 3,
      Title: 'Assignment 3',
      Description: 'description for assignment 3',
      Class: '4th',
      ClassTeacher: 'Mis Sana',
      Section: 'Blue',
    },
    {
      Id: 4,
      Title: 'Assignment 4',
      Description: 'description for assignment 4',
      Class: '5th',
      ClassTeacher: 'Sir Farhan',
      Section: 'Green',
    },
  ]


  get() {
    return this.assignments;
  }



}
