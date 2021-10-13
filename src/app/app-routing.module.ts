import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceChartComponent } from './attendance-chart/attendance-chart.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent,
  },
  {
    path : "dashboard",
    component : DashboardComponent,
  },
  {
    path : "student-list",
    component : StudentListComponent,
  },
  {
    path : "add-student",
    component : AddStudentComponent,
  },
  {
    path : "attendance-list",
    component : AttendanceListComponent,
  },
  {
    path : "attendance-chart",
    component : AttendanceChartComponent,
  },
  {
    path : "student-edit/:id",
    component : StudentEditComponent
  },
  {
    path : "mark-attendance/:id",
    component : MarkAttendanceComponent
  },
  {
    path : "view-attendance/:id",
    component : ViewAttendanceComponent
  },
  {
    path : "attendance-edit/:sid/:aid",
    component : AttendanceEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
