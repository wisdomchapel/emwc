import { EventEmitter } from "../../../node_modules/@angular/core";
import { Item } from "../shared/Item.model";
import { Category } from "../categories/category.model";
import { SizeVarType } from "../SizeVarType.component";
import { Subject } from "rxjs";


export class CartService{
  itemsChanged = new EventEmitter<Item[]>();
  itemCatChanged = new EventEmitter<Category[]>();
  itemsSubChanged = new Subject<Category[]>();
  itemNo = 0;
  totalNum = 0;
  Price: number = 0;
  cartNo = new Subject<number>();

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
    this.itemNo++;
    this.Price = item._Price;
    console.log('value of items is : ',this.itemCat);
    this.itemsSubChanged.next([...this.itemCat]);
    this.cartNo.next(this.itemNo);
   // this.itemCatChanged.next(this.itemCat.slice());
  }

  removeItemCat(itemRemovable:Category){
    // EmailAddresses.splice(EmailAddresses.findIndex(f => { return f.EmailAddress == email.EmailAddress }), 1);
    // this.itemCat = this.itemCat.splice(this.itemCat.findIndex(value => {value._ProductId == itemRemovable._ProductId}),1);
    var indexedCat =this.itemCat.indexOf(itemRemovable);
    this.itemCat.splice(indexedCat,1);
    this.itemNo--;
    this.totalNum = this.totalNum - itemRemovable._Price;
    this.itemsSubChanged.next([...this.itemCat]);
    this.cartNo.next(this.itemNo);

  }
  addItemCategory(items: Category[]){

    this.itemCat.push(...items);
    console.log('push',this.itemCat);
    this.itemCatChanged.next(this.itemCat.slice());
    this.itemsSubChanged.next(this.itemCat.slice());
  }
}
