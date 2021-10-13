import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {

  studentId: number = 0;
  stuName: string = "";
  stuRoll: number = 0;
  attendanceList:Array<Attendance> = [];

  constructor(private activeRoute: ActivatedRoute,private stuService:StudentService){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.studentId = paramsData.id;
    })
    this.loadData();
  }

  loadData(){
    this.stuService.getAllAttendance().subscribe((data) => {
      this.stuService.getStudentById(this.studentId).subscribe((data) => {
        this.stuName = data.name;
        this.stuRoll = data.roll;
      }) 
      this.attendanceList = data.filter((item) => {
        return (item.stuId == this.studentId);
      })
     })
  }

  deleteRecord(id?:number) {
    this.stuService.deleteAttendanceById(id).subscribe(() => {
      this.loadData()
    })
  }

}
