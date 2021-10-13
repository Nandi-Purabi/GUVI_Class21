import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.css']
})
export class AttendanceEditComponent implements OnInit {

  aid: number = 0;
  sid: number =0;
  minDate: string = "2021-01-01";
  maxDate: string = new Date().toLocaleDateString();
  attendanceForm:FormGroup;
  constructor(private activeRoute: ActivatedRoute,private router:Router,private stuService:StudentService) {
    this.maxDate = this.maxDate.substr(6,4)+"-"+this.maxDate.substr(0,2)+"-"+this.maxDate.substr(3,2);
    this.attendanceForm = new FormGroup({
      'attendanceDate': new FormControl('', Validators.required),
      'status': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.sid = paramsData.sid;
      this.aid = paramsData.aid;
      this.stuService.getAttendanceById(paramsData.aid).subscribe((data) => {
        // console.log("attendance with aid")
        // console.log(data)
        delete data.id
        this.attendanceForm.setValue(data)
      })
    })
  }

  submitAttendance(){
    Object.keys(this.attendanceForm.controls).forEach(field => {
      const control = this.attendanceForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if(this.attendanceForm.valid){
      console.log(this.attendanceForm.value);
      console.log("bjdcbigcu")
      this.stuService.updateAttendance(this.aid, this.attendanceForm.value).subscribe(() => {
        this.router.navigate([`/view-attendance/${this.sid}`])
      })
      
    }
  }

}
