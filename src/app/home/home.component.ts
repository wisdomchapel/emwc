import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import { CategoryService } from '../categories/category.service';
import { Subscription } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed:boolean = false;
  itemNo:number = 0;
  sub2: Subscription;
  sub3: this;
  itemNo2: number;
  navbarOpen: boolean = false;
  constructor(public catService: CategoryService, private cartService : CartService) { }

  ngOnInit() {
    this.cartService.cartNo
    .subscribe(
      (num: number) =>{
        this.itemNo = num;
      }
    );
    this.itemNo2 = this.cartService.itemNo;
    console.log('oninit: '+this.itemNo+'2: '+this.itemNo2);
  }
  ngOnChanges(changes:SimpleChanges): void{
    this.cartService.cartNo
    .subscribe(
      (num: number) =>{
        this.itemNo = num;
      }
    );
    this.itemNo2 = this.cartService.itemNo;
    console.log('onchanges: '+this.itemNo+'2: '+this.itemNo2);
// this.itemNo = this.catService.itemNo;
  }
  Search(){}

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen
  }
}
