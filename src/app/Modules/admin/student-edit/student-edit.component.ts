
import { filter } from 'rxjs';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { StudentsService } from './../../../Services/students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student.model';
import { faArrowLeft, faImage } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common'

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(
    private studentService: StudentsService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  backIcon = faArrowLeft;

  studentEditForm: FormGroup;
  selectedStudent: student[];

  ngOnInit(): void {


    this.route.queryParams.subscribe(params => {
      console.log(params['rollNo'])
      this.selectedStudent = this.studentService.search(params['rollNo'])
    })

    this.studentEditForm = new FormGroup({
      'RollNo': new FormControl(this.selectedStudent[0].RollNo, [Validators.required]),
      'Name': new FormControl(this.selectedStudent[0].Name, [Validators.required]),
      'FatherName': new FormControl(this.selectedStudent[0].FatherName, [Validators.required]),
      'Class': new FormControl(this.selectedStudent[0].Class, [Validators.required]),
      'Section': new FormControl(this.selectedStudent[0].Section, [Validators.required]),
      'ClassTeacher': new FormControl(this.selectedStudent[0].ClassTeacher, [Validators.required]),
      'FeeStatus': new FormControl(this.selectedStudent[0].FeeStatus, [Validators.required]),
      'Phone': new FormControl(this.selectedStudent[0].Phone, [Validators.required]),
      'Email': new FormControl(this.selectedStudent[0].Email, [Validators.required]),
      'Address': new FormControl(this.selectedStudent[0].Address, [Validators.required]),
      'DateOfBirth': new FormControl(this.selectedStudent[0].DateOfBirth, [Validators.required]),
      'CNIC': new FormControl(this.selectedStudent[0].CNIC, [Validators.required]),
    });



  }

  OnUpdate() {
    this.studentService.update(this.studentEditForm.value)

  }

  onback() {
    this.location.back();
  }


}
