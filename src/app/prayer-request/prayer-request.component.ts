import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Countries } from '../countries.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.component.html',
  styleUrls: ['./prayer-request.component.css']
})
export class PrayerRequestComponent implements OnInit {
  Name:string;
  Email:string;
  Title:string;
  PrayerRequest: string;
  Sex:string;
  Country:Countries;
  // Prayerrequests:Array<Testimony>;
  saved:boolean;
  ProductId:string;
  date:Date;
  subscription: Subscription;
  sexes:Array<string> = ['Male','Female'];
  countries = Object.keys(Countries);
  @ViewChild('fileInput',{static:true}) fileInput : ElementRef;
  constructor() { }

  ngOnInit() {
    this.date = new Date(Date.now());
  }
  SendRequest(){}
}
