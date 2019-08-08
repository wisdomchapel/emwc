import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CategoryType } from "./categories/Category-type.component";
import { CategoryService } from "./categories/category.service";
import { State } from "./categories/State.component";
import { Testimony } from "./testimony.model";
import { TestimonyType } from './Testimony-type.component';
import { Countries } from './countries.component';
import { TestimonyService } from './testimony-list/testimony.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-testimony',
  templateUrl:'./testimony.component.html',
  styleUrls: ['./testimony.component.css']
})

export class TestimonyComponent implements OnInit{

  form : FormGroup;
  Name:string;
  Email:string;
  Title:TestimonyType;
  Testimony: string;
  Sex:string;
  Country:Countries;
  testimonies:Array<Testimony>;
  saved:boolean;
  ProductId:string;
  date:Date;
  subscription: Subscription;
viewTestimonies:boolean = false;


  testimonytypes = Object.keys(TestimonyType);
  sexes:Array<string> = ['Male','Female'];
  countries = Object.keys(Countries);
  @ViewChild('fileInput',{static:true}) fileInput : ElementRef;

  constructor(private catService:CategoryService,private testService:TestimonyService){
    // this.testimonies = [];

  }

  ngOnInit(){
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

  PostCategory(testimony){
    this.catService.PostTestimony(testimony).subscribe(
      res => {console.log("res = ", res), this.saved = true},
      err => console.log(err)
    );
  }

  // UploadCategory(ProductId,testimony,file){

  // }
  SaveTestimony(){
      let testimony:Testimony;
      testimony = new Testimony(this.Name,this.Email,this.Title,this.Sex,this.Country,this.date,this.Testimony);
        testimony.state = State.New;
        // this.testimonies.push(testimony);

        //this.catService.urlCategory()
        // this.PostCategory(testimony);
        this.SaveToList(testimony);
        this.saved = true;

      //   setTimeout(function() {
      //     this.saved = false;
      //     console.log(this.saved);
      // }, 3000);
        this.testService.getTestimonies();

        this.saved = false;

  }

  SaveToList(testimony){
    this.testService.addTestimonytoList(testimony);

  }


  getTestimonies()
  {
    this.viewTestimonies = true;
    this.testService.getTestimonies();


  }

}


