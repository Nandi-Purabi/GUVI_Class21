import { Component, OnInit } from '@angular/core';
import { Student, Attendance } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList:Array<Student>=[];
  attendanceList:Array<Attendance> = [];
  constructor(private stuService:StudentService) { 
    this.stuService.getStudent().subscribe((data)=>{
      this.studentList=data;
    })
  }

  ngOnInit(): void {
  }

  deleteData(id?:number)
  {
    this.stuService.deleteStudentById(id).subscribe(()=>{
      this.stuService.getAllAttendance().subscribe((data) => {
        this.attendanceList = data.filter((item) => {
          return (item.stuId == id);
        })
        //console.log("needed")
        console.log(this.attendanceList)
        //console.log("all aid")
        this.attendanceList.forEach(element => {
          console.log(element.id)
          this.stuService.deleteAttendanceBySId(element.id)
          // console.log("ghctjtutu")
          
        })
       })
      this.stuService.getStudent().subscribe((data)=>{
        this.studentList=data;
      })
    })
  }
}
