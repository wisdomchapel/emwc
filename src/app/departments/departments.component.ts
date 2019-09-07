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
  Amount: number;
  Sex:string;
  Title:string;
  Giving: string;
  Country: string;
  Currency:string;
  PhoneNumber:string;
  Department : string;
  saved:boolean;

  sexes:Array<string> = ['Male','Female'];
  countries = Object.keys(Countries);
  currencies:Array<string> = ['NGN','USD'];
  departments = Object.keys(DepartmentType);
  constructor() { }

  ngOnInit() {
  }

}
