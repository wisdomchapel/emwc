import { Injectable, EventEmitter, ViewChild, ElementRef } from "../../../node_modules/@angular/core";
import { Category } from "./category.model";
import { Item } from "../shared/Item.model";
import { ShoppingListService } from "../shopping-list/ShoppingList.service";
import { CategoryType } from "./Category-type.component";
import { Router, NavigationEnd } from "@angular/router";
import { SizeVarType } from "../SizeVarType.component";
import { Subject, BehaviorSubject, Observable, Observer } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response, RequestOptions } from "@angular/http";
import { CartService } from "../cart/cart.service";
import { Testimony } from "../testimony.model";

@Injectable()

export class CategoryService{
  itemSelected = new EventEmitter<Category>();
  itemNo = 0;
  public category="";
  @ViewChild('fileInput',{static:true}) inputEl:ElementRef;
  //public productId = 0;
  urlCategories = "https://localhost:5001/api/Category";
  urlCategory = "htpps://localhost:5001/api/Category/"+this.category;
  urlUpload = "http://localhost:5000/api/Upload/file";
  private previousUrl:string;
  private currentUrl:string;
  public checkSelectedItem = CategoryType.Gowns;
  public selectedItemSubject = new BehaviorSubject<CategoryType>(CategoryType.Gowns);
  public selectedItemSubjectObservable = this.selectedItemSubject.asObservable();
  public sample = 0;


  public selectedItem :CategoryType;


//   private gowns:Category[] = [

//     new Category('Blue Ball Gown','A flowery designed one strand gown',
//     15000,'../../assets/images/BallGown_BlueDres1.jpg',SizeVarType[SizeVarType[SizeVarType.Medium]],1,'pro1',0),
//       new Category('Green Ball Gown','A green ornest silk one armed gown',
//     12000,'../../assets/images/BallGown_Green.jpg',SizeVarType[SizeVarType.Large],1,'pro1',0),
//     new Category('Red Ball Gown','A V-neck body-con, fish tail gown',
//     15000,'../../assets/images/BallGown_redDres3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//       new Category('Wedding Gown','Layered Wedding Dress',
//     45000,'../../assets/images/wedding_dress1.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//     new Category('Fitted Wedding Gown','Fitted A Line Wedding Dress',
//     15000,'../../assets/images/wedding_dress4.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//       new Category('Silver Wedding Gown','Silver-Lined Wedding gown',
//     12000,'../../assets/images/wedding_dress3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//   ];

//   private shirts:Category[] = [
//     new Category('Black Shirt','A fitted black poka-dot Shirt',
//   15000,'../../assets/images/FShirt.jpg',SizeVarType[SizeVarType.Small],1,'pro1',1),
//     new Category('Powder Blue Shirt','A short-sleeved powder-blue Shirt',
//   12000,'../../assets/images/FShirt3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',1),
//   new Category('Black Off-Shoulder Shirt','An off-shoulder, long-sleeved body-con Shirt',
//   15000,'../../assets/images/FShirt2.jpg',SizeVarType[SizeVarType.Small],1,'pro1',1),
//     new Category('Cardigan','A black Cardigan',
//   45000,'../../assets/images/FShirtCardigan.jpg',SizeVarType[SizeVarType.Small],1,'pro1',1),
//   new Category('Cropped Shirt','A neck-arm strapped black cropped-top',
//   15000,'../../assets/images/FShirtCrop.jpg',SizeVarType[SizeVarType.Small],1,'pro1',1),

//   ];

// private jeans:Category[] = [
//   new Category('Blue Ripped Jeans','You-axon. fitted blue ripped',
//   5000,'../../assets/images/Jeans1.jpg',SizeVarType[SizeVarType.Small],1,'pro1',4),
//     new Category('High-Waist Jeans','A ripped High-Waist jeans in blue,white,black',
//   12000,'../../assets/images/Jeans2.jpg',SizeVarType[SizeVarType.Small],1,'pro1',4),
//   new Category('Grey Jean','A grey, skinny, high-waist jeans',
//   15000,'../../assets/images/Jeans3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',4),
//     new Category('Faded Jeans','A blue, fitted, white faded jeans',
//   45000,'../../assets/images/Jeans4.jpg',SizeVarType[SizeVarType.Small],1,'pro1',4),

// ];

// private pants:Category[] = [
//   new Category('Straight Nude Pants','Long Official Straight Nude Pants',
//   5000,'../../assets/images/FpantTrouser1.jpg',SizeVarType[SizeVarType.Small],1,'pro1',6),
//     new Category('High-Waist Jeans','A ripped High-Waist jeans in blue,white,black',
//   12000,'../../assets/images/FpantTrouser2.jpg',SizeVarType[SizeVarType.Small],1,'pro1',6),
//   new Category('Grey Jean','A grey, skinny, high-waist jeans',
//   15000,'../../assets/images/FpantTrouser3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',6),
//     new Category('Faded Jeans','A blue, fitted, white faded jeans',
//   45000,'../../assets/images/FpantTrouser4.jpg',SizeVarType[SizeVarType.Small],1,'pro1',6),

// ];

// private skirts:Category[] = [
//   new Category('Powder-Blue Skirt','A-Line Knee-length sky-blue skirt',
//   15000,'../../assets/images/Skirt_blue.jpg',SizeVarType[SizeVarType.Small],1,'pro1',5),
//     new Category('Carribean Skirt','A turquoise green, A-line, Carribean Skirt',
//   12000,'../../assets/images/FShirt3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',5),
//   new Category('Denim Skirt','A fitted, buttoned, Denim skirt',
//   15000,'../../assets/images/Skirt_Denim.jpg',SizeVarType[SizeVarType.Small],1,'pro1',5),
//     new Category('Pleated Skirt','A-Line,High-Waist, flower pleated skirt',
//   45000,'../../assets/images/Skirt_FlowerPleated.jpg',SizeVarType[SizeVarType.Small],1,'pro1',5),
//   new Category('Long Skirt','High-Waist, Lavender Brown, long skirt',
//   15000,'../../assets/images/Skirt_Long.jpg',SizeVarType[SizeVarType.Small],1,'pro1',5),
//   new Category('Peplum Skirt','A red,fitted,peplum skirt',
//   45000,'../../assets/images/Skirt_Peplum.jpg',SizeVarType[SizeVarType.Small],1,'pro1',5),
//   new Category('Short Skirt','A short,black, pleated skirt',
//   15000,'../../assets/images/Skirt_Pleated.jpg',SizeVarType[SizeVarType.Small],1,'pro1',5),

// ];private bags:Category[] = [
//   new Category('Red and Black Bag','A leather bound,red and black bag',
//   5000,'../../assets/images/bag1.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),
//     new Category('Brown Leather bag','A brown leather bag, with gold plated handle',
//   12000,'../../assets/images/bag2.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),
//   new Category('Pink Bag','A pink, cute bag',
//   15000,'../../assets/images/bag3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),
//     new Category('Powder Blue Bag','A powder blue bag, with black puffs and additional long hands',
//   45000,'../../assets/images/bag4.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),
//   new Category('Nude Colored Bag','A leather bound, nude colored bag, with purse',
//   5000,'../../assets/images/bag6.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),
//     new Category('Purple Leather bag','A purple leather bag, with silver opening',
//   12000,'../../assets/images/bag5.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),
//   new Category('Vintage Light-Grey Bag','A vintage,light-grey bag, with character muffs',
//   15000,'../../assets/images/bag8.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),
//     new Category('Black Bag','A leather black bag, with silver handles',
//   45000,'../../assets/images/bag9.jpg',SizeVarType[SizeVarType.Small],1,'pro1',2),

// ];

// private shoes:Category[] = [
//   new Category('Korean Flats','A pink and white, korean flats',
//   15000,'../../assets/images/Flats1.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//     new Category('Black Flats','A black, leather, laced shoe',
//   12000,'../../assets/images/Flats2.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//   new Category('Shiny Black Shoes','A shiny black shoe',
//   15000,'../../assets/images/Flats3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//     new Category('Milk-White Heels','A Milk-White stiletto heels',
//   45000,'../../assets/images/Heels1.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//   new Category('Red Heels','Red Stiletto Heels',
//   15000,'../../assets/images/Heels3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//   new Category('Nude Leather Heels','A Nude Leather block heels',
//   45000,'../../assets/images/Heels2.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//   new Category('Black Shiny Heels','Black Shiny Stiletto Heels',
//   15000,'../../assets/images/Heels4.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//   new Category('Blue Sneakers','A sky-blue,black horse coated sneakers',
//   5000,'../../assets/images/Sneakers3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),
//   new Category('White Sneakers','A white,sneaker',
//   4000,'../../assets/images/Sneakers2.jpg',SizeVarType[SizeVarType.Small],1,'pro1',3),

// ];


  constructor(private slService: ShoppingListService,  private cartService:CartService, private router:Router, private http:HttpClient) {
this.currentUrl = this.router.url;
/* this.selectedItemSubject.subscribe(
  (value)=>{
    this.selectedItem = value;
  }
) */
router.events.subscribe(event => {
  if (event instanceof NavigationEnd) {
    this.previousUrl = this.currentUrl;
    this.currentUrl = event.url;
  };
});
  }

  public _serverError(err: any): Observable<any> {
    console.log('server error:', err);  // debug
    if (err instanceof Response) {
        return observableThrowError(err.json().error || 'backend server error');

    }
    return observableThrowError(err || 'backend server error');
}

  GetCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.urlCategories).pipe(catchError(this._serverError));
  }

  GetProductByCategory(category: string):Observable<Category[]>{
    return this.http.get<Category[]>(`${this.urlCategories}/${category}`).
    pipe(catchError(this._serverError));
  }

  GetProductByCategoryId(category:string, id:number):Observable<Category>{
    return this.http.get<Category[]>(`${this.urlCategories}/${category}/${id}`).
    pipe(catchError(this._serverError));
  }

  PostTestimony(testimony:Testimony):Observable<any[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(this.urlCategories,JSON.stringify(testimony),{headers
    }).pipe(catchError(this._serverError));
  }


  UploadImage(productId:string,category:CategoryType,file:File):Observable<Object>{
const formData: FormData = new FormData();
formData.append('file', file, file.name);//avatar.php
return this.http.post(`${this.urlUpload}/${category}/${productId}`,formData)
.pipe(catchError(this._serverError));
  }

  // UploadImage(productId:string,category:CategoryType,file:File):Observable<Object>{
  //   let inputEl: HTMLInputElement = this.inputEl.nativeElement;
  //   let fileCount:number = inputEl.files.length;

  //   const formData: FormData = new FormData();
  //   formData.append('uploadFile',inputEl.files.item(0));

  //   //formData.append('uploadFile', file, file.name);//avatar.php
  //   return this.http.post(`${this.urlUpload}/${category}/${productId}`,formData)
  //   .pipe(catchError(this._serverError));
  //     }

  // getGowns(){
  //   console.log('gowns service');
  //   console.log(this.gowns);
  //   return this.gowns.slice();
  // }

  // getGown(index:number){
  //   return this.gowns[index];
  // }

  // getCategory(index:number){

  // }

  // getShirts(){
  //   console.log('shirt service');
  //   console.log(this.shirts);
  //   return this.shirts.slice();

  // }

  // getShirt(index:number){
  //   return this.shirts[index];
  // }

  // getJeans(){
  //   return this.jeans.slice();
  // }
  // getJean(index:number){
  //   return this.jeans[index];
  // }
  // getSkirts(){
  //   return this.skirts.slice();
  // }
  // getSkirt(index:number){
  //   return this.skirts[index];
  // }
  // getBags(){
  //   return this.bags.slice();
  // }
  // getBag(index:number){
  //   return this.bags[index];
  // }
  // getShoes(){
  //   return this.shoes.slice();
  // }
  // getShoe(index:number){
  //   return this.shoes[index];
  // }
  // getPants(){
  //   return this.pants.slice();
  // }
  // getPant(index:number){
  //   return this.pants[index];
  // }

  addItemsToCart(items: Item[]){
    this.slService.addItems(items);
    this.cartService.addItems(items);
    console.log("Adding items to cart",items);
  }
  addItemToList(items:Category){
this.slService.addItemCat(items);
this.cartService.addItemCat(items);
// this.itemNo++;

console.log('Adding category');
console.log('items',items);

  }

  removeItemFromList(item:Category){
    this.cartService.removeItemCat(item);
  }
  addItemCatToCart(items:Category[]){
    this.slService.addItemCategory(items);
    console.log('Adding category');
    console.log('items',items);
    console.log(this.slService.addItemCategory(items));
  }

  public getPreviousUrl(){
    return this.previousUrl;
  }
  setType(catType:CategoryType){
// if(catType = CategoryType.Gowns){
//   return CategoryType[0];
// }
this.checkSelectedItem = catType
console.log("categorytype "+CategoryType[0]+"+ cattype "+catType)
  this.selectedItemSubject.next(catType);

  }

  getImageUrl(){

  }

  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    // This will draw image
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    var dataURL = canvas.toDataURL("image/png");
 return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
 }
  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
          // This will call another method that will create image from url
          img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
           observer.error(err);
        };
      } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
      }
    });
 }
}
