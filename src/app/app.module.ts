import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceChartComponent } from './attendance-chart/attendance-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    CardComponent,
    StudentListComponent,
    AddStudentComponent,
    AttendanceListComponent,
    AttendanceChartComponent,
    StudentEditComponent,
    MarkAttendanceComponent,
    AttendanceEditComponent,
    ViewAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
