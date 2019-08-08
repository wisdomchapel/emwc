import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../shared/Item.model';
import { ShoppingListService } from './ShoppingList.service';
import { Category } from '../categories/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
items:Item[];
itemsCat: Category[];
itemCate:Category;
private subscription: Subscription;
   constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    // this.items = this.slService.getItems();
    // this.slService.itemsChanged
    // .subscribe(
    //   (items: Item[]) =>{
    //     this.items = items;
    //   }
    // );
    this.itemsCat = this.slService.getItemCat();
    this.subscription = this.slService.itemsSubChanged
    .subscribe(
      (itemsCat: Category[]) =>{
this.itemsCat = itemsCat;
      }
    );
    // this.slService.itemCatChanged
    // .subscribe(
    //   (itemsCat: Category[]) =>{
    //     this.itemsCat = itemsCat;
    //   }
    // );
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
  /**
   *
   */
  // constructor() {
  //     }
      // ngOnInit(){}

}
