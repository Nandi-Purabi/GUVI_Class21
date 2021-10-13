import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {

  id: number = 0;
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
      this.id = paramsData.id;
      this.attendanceForm.setValue({
        'attendanceDate': this.maxDate,
        'status': ''
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
      this.stuService.saveAttendance(this.attendanceForm.value, this.id).subscribe(() => {
        this.router.navigate([`/view-attendance/${this.id}`])
      },() => {
        alert("Something Went Wrong!!")
      })
      
    }
  }

}
