import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TestimonyType } from '../Testimony-type.component';
import { Countries } from '../countries.component';
import { Testimony } from '../testimony.model';
import { Subscription } from 'rxjs';
import { CategoryService } from '../categories/category.service';
import { TestimonyService } from '../testimony-list/testimony.service';
import { State } from '../categories/State.component';

@Component({
  selector: 'app-share-testimony',
  templateUrl: './share-testimony.component.html',
  styleUrls: ['./share-testimony.component.css']
})
export class ShareTestimonyComponent implements OnInit {
  form : FormGroup;
  Name:string;
  Email:string;
  Title:TestimonyType;
  Testimony: string;
  Sex:string;
  Country:Countries;
  testimonies:Array<Testimony>;
  currentTestimony:Testimony;
  saved:boolean;
  ProductId:string;
  date:Date;
  subscription: Subscription;
viewTestimonies:boolean = false;
Stestimony:boolean = true;
testimonytypes = Object.keys(TestimonyType);
sexes:Array<string> = ['Male','Female'];
countries = Object.keys(Countries);
@ViewChild('fileInput',{static:true}) fileInput : ElementRef;

constructor(private catService:CategoryService,private testService:TestimonyService){
  // this.testimonies = [];

}

  ngOnInit() {
    this.date = new Date(Date.now());
    this.testimonies = this.testService.getTestimonies();
    this.subscription = this.testService.testimonySubChanged
    .subscribe(
      (testimonies: Testimony[]) =>{
        this.testimonies = testimonies;
        console.log(this.testimonies);
      }
    );
  }


  // UploadCategory(ProductId,testimony,file){

  // }
  PostTestimony(testimony){
    this.testService.PostTestimony(testimony).subscribe(
      res =>{ console.log("res = ",res), this.saved = true;},
      err => console.log(err)
    );

  }
  SaveTestimony(){
      let testimony:Testimony;
      testimony = new Testimony(this.Name,this.Email,this.Title,this.Sex,this.Country,this.date,this.Testimony);
      testimony._Title = this.Title;
        testimony.state = State.New;
        this.testimonies.push(testimony);
         this.currentTestimony = testimony;
         this.testService.addTestimonytoList(testimony);

        //this.catService.urlCategory()
        // this.PostTestimony(testimony);
        this.PostTestimony(testimony);
        this.saved = true;

        this.testService.GetTestimony();

        this.saved = false;

  }




   shareTestimony()
   {
    this.Stestimony = true;
   }

}
