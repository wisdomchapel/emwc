import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../shared/Item.model';
import { Category } from '../categories/category.model';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { CategoryService } from '../categories/category.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {

  items:Item[];
itemsCat: Category[];
itemCate:Category;
itemId:Category;
totalPrice:number = 0;
private subscription: Subscription;
   constructor(private cartService:CartService, private categoryService : CategoryService) { }

  ngOnInit() {
    // this.items = this.cartService.getItems();
    // this.cartService.itemsChanged
    // .subscribe(
    //   (items: Item[]) =>{
    //     this.items = items;
    //   }
    // );

    this.itemsCat = this.cartService.getItemCat();
    this.cartService.itemsSubChanged
    .subscribe(
    ((params: Category[]) =>{
    this.itemsCat = params;
    console.log('params: '+params);
  }
)
    );
    this.cartService.totalNum = this.cartService.totalNum + this.cartService.Price;
    this.totalPrice = this.cartService.totalNum;
    // this.itemsCat.forEach(
    //   d=>{
    //     this.totalPrice = this.totalPrice+ +d._Price;
    //     console.log('d.price: '+d._Price);
    //     console.log('total price: '+this.totalPrice);
    //   }
    // )
  // console.log('d._Price: '+d._Price);
    console.log('total_Price: '+this.totalPrice);
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.subscription.unsubscribe();
  }

  removeFromCart(category){
    this.categoryService.removeItemFromList(category);
    this.cartService.itemNo = this.cartService.itemNo - 1;
    this.totalPrice = this.cartService.totalNum;

console.log('removed');
  }
}
