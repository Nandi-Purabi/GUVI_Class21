import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm:FormGroup
  constructor(private stuService:StudentService,private router:Router) {
    this.studentForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'roll': new FormControl('', Validators.required),
      'branch': new FormControl('', Validators.required),
      'yop': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }
  ngOnInit(): void {
  }

  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.studentForm.valid){
      console.log(this.studentForm.value);
      this.stuService.saveStudent(this.studentForm.value).subscribe(() => {
      this.router.navigate(['/student-list'])
      },() => {
        alert("Something Went Wrong!!")
      })
      
    }
  }

}
