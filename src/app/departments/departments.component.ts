import { Component, OnInit } from '@angular/core';
import { DepartmentType } from './Department-type.component';
import { FormGroup } from '@angular/forms';
import { Countries } from '../countries.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  form : FormGroup;
  Name:string;
  Email:string;
  Reason: string;
  Sex:string;
  Title:string;
  Giving: string;
  Country: string;
  Currency:string;
  PhoneNumber:string;
  Department : string;
  saved:boolean;
departmentChild:string;
  sexes:Array<string> = ['Male','Female'];
  countries = Object.keys(Countries);
  currencies:Array<string> = ['NGN','USD'];
  departments = Object.keys(DepartmentType);
  deptChilds:Array<string> = ['DeptChld1','DeptChild2'];
  constructor() { }

  ngOnInit() {
  }

}
