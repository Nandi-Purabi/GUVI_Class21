import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance-chart',
  templateUrl: './attendance-chart.component.html',
  styleUrls: ['./attendance-chart.component.css']
})
export class AttendanceChartComponent implements OnInit {

  constructor(private stuService:StudentService) { }

  ngOnInit(): void {
  }

}
