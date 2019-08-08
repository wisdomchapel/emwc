import { EventEmitter } from "../../../node_modules/@angular/core";
import { Item } from "../shared/Item.model";
import { Category } from "../categories/category.model";
import { SizeVarType } from "../SizeVarType.component";
import { Subject } from "rxjs";


export class ShoppingListService{
  itemsChanged = new EventEmitter<Item[]>();
  itemCatChanged = new EventEmitter<Category[]>();
  itemsSubChanged = new Subject<Category[]>();

  private items:Item[]=[
    new Item('Short Gown',3),
    new Item('Trouser',2),
  ];

  public itemCat: Category[] = [
    new Category('Test','A test',200,'../../assets/images/bag5.jpg',
    SizeVarType[SizeVarType.Small],1,'pro1',3)
  ];
   public item:Category;

  getItems(){
    console.log('getting items');
    return this.items.slice();
  }

  getItemCat(){
    console.log('getting items category');
    return this.itemCat.slice();
  }

  getItemCate(){
    return this.item._Name+ this.item._Description;
  }

  addItem(item: Item){
    this.items.push(item);
    this.itemsChanged.emit(this.items.slice());
  }

  addItems(items: Item[]){
    this.items.push(...items);
    this.itemsChanged.emit(this.items.slice());
  }

  addItemCat(item:Category){
    this.itemCat.push(item);
    console.log('value of items is : ',this.itemCat);
    this.itemsSubChanged.next([...this.itemCat]);
   // this.itemCatChanged.next(this.itemCat.slice());
  }
  addItemCategory(items: Category[]){

    this.itemCat.push(...items);
    console.log('push',this.itemCat);
    this.itemCatChanged.next(this.itemCat.slice());
    this.itemsSubChanged.next(this.itemCat.slice());
  }
}
