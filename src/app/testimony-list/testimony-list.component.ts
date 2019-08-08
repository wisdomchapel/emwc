import { Component, OnInit, Input } from '@angular/core';
import { Testimony } from '../testimony.model';
import { Observable, Subscription } from 'rxjs';
import { TestimonyType } from '../Testimony-type.component';
import { TestimonyService } from './testimony.service';

@Component({
  selector: 'app-testimony-list',
  templateUrl: './testimony-list.component.html',
  styleUrls: ['./testimony-list.component.css']
})
export class TestimonyListComponent implements OnInit {
  testimonies:Testimony[];
  testimoniess: Observable<Testimony[]>;
  @Input() testType: TestimonyType;
  testimony: {name:string};
  paramsSubscription: Subscription
  constructor(private testimonyService:TestimonyService) { }

  ngOnInit() {
    this.testimonies = this.testimonyService.getTestimonies();
  }

}
