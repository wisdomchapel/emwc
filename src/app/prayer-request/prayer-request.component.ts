import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Countries } from '../countries.component';
import { Subscription } from 'rxjs';
import { Prayer } from '../testimony.model';
import { TestimonyService } from '../testimony-list/testimony.service';
import { State } from '../categories/State.component';

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

  // Prayerrequests:Array<Prayer>;
  saved:boolean;
  ProductId:string;
  date:Date;
  subscription: Subscription;
  sexes:Array<string> = ['Male','Female'];
  countries = Object.keys(Countries);
  @ViewChild('fileInput',{static:true}) fileInput : ElementRef;
  currentPrayer: Prayer;
  showDialog: boolean = false;
  constructor(private testService:TestimonyService) { }

  ngOnInit() {
    this.date = new Date(Date.now());
  }
  SendRequest(prayer: Prayer){
this.testService.PostPrayer(prayer).subscribe(
  res =>{ console.log("res = ",res), this.saved = true;
},
  err => console.log(err)
);
  }

  SavePrayer(){
    let prayer:Prayer;
    prayer = new Prayer(this.Name,this.Email,this.Title,this.Sex,this.Country,this.PrayerRequest);
    prayer._Title = this.Title;
      prayer.state = State.New;

      this.currentPrayer = prayer;
      this.SendRequest(prayer);
      this.openDialog();

}

openDialog(){
  console.log(this.showDialog);
  this.showDialog = true;
  console.log(this.showDialog);
}
cancelAction(){
  this.showDialog = false;
  return false;
}
}
