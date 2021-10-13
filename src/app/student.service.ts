import { Injectable } from '@angular/core';
import { Student, Attendance } from './modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  saveStudent(stu: Student) {
    return this.http.post(`https://6165aaa9cb73ea001764217b.mockapi.io/Student`, stu)
  }

  getStudent() {
    return this.http.get<Array<Student>>(`https://6165aaa9cb73ea001764217b.mockapi.io/Student`);
  }

  getStudentById(id: number) {
    return this.http.get<Student>(`https://6165aaa9cb73ea001764217b.mockapi.io/Student/${id}`)
  }

  updateStudent(id: number, data: Student) {
    return this.http.put(`https://6165aaa9cb73ea001764217b.mockapi.io/Student/${id}`, data)
  }

  deleteStudentById(id?: number) {
    return this.http.delete(`https://6165aaa9cb73ea001764217b.mockapi.io/Student/${id}`)
  }

  saveAttendance(data: Attendance, newId: number) {
    data.stuId = newId ;
    data.status = (data.status.toString() == "true");
    return this.http.post(`https://6165aaa9cb73ea001764217b.mockapi.io/Attendance`,data);
  }

  getAllAttendance() {
    return this.http.get<Array<Attendance>>(`https://6165aaa9cb73ea001764217b.mockapi.io/Attendance`)
  }

  deleteAttendanceById(aid?:number) {
    return this.http.delete(`https://6165aaa9cb73ea001764217b.mockapi.io/Attendance/${aid}`)
  }

  updateAttendance(aid: number, data: Attendance) {
    data.status=(data.status.toString()==="true")
    return this.http.put(`https://6165aaa9cb73ea001764217b.mockapi.io/Attendance/${aid}`, data)
  }

  getAttendanceById(aid: number) {
    return this.http.get<Attendance>(`https://6165aaa9cb73ea001764217b.mockapi.io/Attendance/${aid}`)
  }

  deleteAttendanceBySId(aid?:number) {
    return this.http.delete(`https://6165aaa9cb73ea001764217b.mockapi.io/Attendance/${aid}`)
  }

}
