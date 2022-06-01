import { Injectable } from '@angular/core';
import { Attendance } from '../models/Attendance.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardAttendanceService {

  constructor() { }

  data: Attendance = { TotalDays: 30, PresentDays: 23 };


}
