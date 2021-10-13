import { Component, OnInit } from '@angular/core';
import { Student } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  studentList:Array<Student> = [];

  constructor(private stuService:StudentService) { }

  ngOnInit(): void {
    this.stuService.getStudent().subscribe((data) => {
      this.studentList = data
     })
  }

}
