import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id: number = 0;
  studentForm:FormGroup;
  constructor(private stuService:StudentService, private router:Router, private activeRoute: ActivatedRoute) {
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
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.stuService.getStudentById(paramsData.id).subscribe((data) => {
        delete data.id
        this.studentForm.setValue(data)
      })
    })
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
      this.stuService.updateStudent(this.id, this.studentForm.value).subscribe(() => {
      this.router.navigate(['/student-list'])
      })
      
    }
  }

}
