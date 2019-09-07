import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../categories/category.service';
import { TestimonyService } from '../testimony-list/testimony.service';
import { Testimony } from '../testimony.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-view-testimonies',
  templateUrl: './view-testimonies.component.html',
  styleUrls: ['./view-testimonies.component.css']
})
export class ViewTestimoniesComponent implements OnInit {
  testimonies:Array<Testimony>;
  saved:boolean;
  ProductId:string;
  date:Date;
  subscription: Subscription;
viewTestimonies:boolean = false;
Stestimony:boolean = true;
  constructor(private catService:CategoryService,private testService:TestimonyService) { }

  ngOnInit() {

    this.testService.GetTestimony().subscribe(
      (res:Testimony[]) =>{
        this.testimonies = res;
      }
    )

    // this.subscription = this.testService.testimonySubChanged
    // .subscribe(
    //   (testimonies: Testimony[]) =>{
    //     this.testimonies = testimonies;
    //     console.log(this.testimonies);
    //   }
    // );
  }

  getTestimonies()
  {
    this.viewTestimonies = true;
    this.testService.getTestimonies();

  }

}
