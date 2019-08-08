import {Component,OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryType } from '../Category-type.component';
import { Observable, Subscription } from 'rxjs';

// import { Category } from '../category.model';
// import { CategoryService } from '../category.service';


@Component({
  selector:'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers:[CategoryListComponent],
})

export class CategoryDetailComponent implements OnInit,OnChanges{
  catgry: {name:string};
  prevRoute: string;
  category: Category = <Category>{};
  categoriess: Category[] = <Category[]>{};
 id: number;
 catName:string;
 catObs: Subscription;
 @Input() catType:CategoryType;
 @Input() categories: Category[];
 catt:CategoryListComponent;
constructor(public categoryService: CategoryService,
  private route:ActivatedRoute, private router:Router,
  private cateType:CategoryListComponent
  ) {

}
/**
 * previousUrl: string;
constructor(router: Router) {
  router.events
  .filter(event => event instanceof NavigationEnd)
  .subscribe(e => {
    console.log('prev:', this.previousUrl);
    this.previousUrl = e.url;
  });
}
 */
onAddToCart(){

  //this.categoryService.addItemsToShoppingList(this.category[0]);
  //console.log('in shopping list:category[0]: '+this.category[0]);
  //this.categoryService.addItemCatToShoppingList(this.categoriess);
  this.categoryService.addItemToList(this.category);
  console.log('In add to shopping list');
  console.log(this.categories);
}

purchase(){

}
ngOnChanges(simpleC: SimpleChanges){
//console.log(this.categoryService.setType(this.catType));
}
ngOnInit(){
  console.log('In detail');
  // var cateType = this.categoryService.getType(this.catType);
  //console.log(this.categoryService.selectedItem.catType);
  this.categoryService.selectedItemSubject.subscribe(type => console.log('Crap2', type));
  var ad = this.route.parent.snapshot.params['name'];
var axy = this.categoryService.getPreviousUrl();
  this.route.params
  .subscribe(
    ((params:Params)=>{
       var id2 = this.categoryService.getPreviousUrl();
      this.id = +params['id'];
      this.catName = params['name'];
      console.log(this.id);
      /*use subject to change the category type, through a method which
      calls next*/
      //var categoryType = CategoryType[this.id];
      // this.category = this.categoryService.getBag(this.id);
      console.log('category type: ',this.cateType.catType);
      //else if(categoryType === 'Bags'){
        this.catObs =this.categoryService.GetProductByCategoryId(this.catName,this.id).subscribe(
          (res:Category) =>{
            this.category = res;
          }
        );

      // this.categoryService.selectedItemSubjectObservable.subscribe(type => {
      //   // if( type === CategoryType.Gowns){
      //   //   this.category = this.categoryService.getGown(this.id);
      //   // }

      //   // if( this.catName === CategoryType[CategoryType.Gowns]){
      //   //   this.category = this.categoryService.getGown(this.id);
      //   // }
      //   // else if(this.catName === CategoryType[CategoryType.Shirts])
      //   // {
      //   //         this.category = this.categoryService.getShirt(this.id);
      //   //         console.log("In shirts");
      //   //         console.log(this.category);
      //   // }
      //   // else if(this.catName === CategoryType[CategoryType.Bags])
      //   // {
      //   //         this.category = this.categoryService.getBag(this.id);
      //   //         console.log("In shirts");
      //   //         console.log(this.category);
      //   // }
      //   // else if(this.catName ===CategoryType[CategoryType.Shoes])
      //   // {
      //   //         this.category = this.categoryService.getShoe(this.id);
      //   //         console.log("In shirts");
      //   //         console.log(this.categories);
      //   // }
      //   // else if(this.catName === CategoryType[CategoryType.Jeans])
      //   // {
      //   //         this.category = this.categoryService.getJean(this.id);
      //   //         console.log("In shirts");
      //   //         console.log(this.category);
      //   // }
      //   // else if(this.catName === CategoryType[CategoryType.Skirts])
      //   // {
      //   //         this.category = this.categoryService.getSkirt(this.id);
      //   //         console.log("In shirts");
      //   //         console.log(this.category);
      //   // }
      //   // else if(this.catName === CategoryType[CategoryType.Pants]){
      //   //         this.category = this.categoryService.getPant(this.id);
      //   //         console.log("In shirts");
      //   //         console.log(this.category);
      //   // }
      //   // else{
      //   //         this.categories = [];
      //   //       }
      // });

          }))
}

ngOnDestroy() {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.catObs.unsubscribe();
}

// showCategory(product){
//   this.route.params
//   .subscribe(
//     (params:Params)=>{
//       this.prevRoute = this.route.parent.snapshot.params['name'];
//       var us = this;
//       this.id = +params['id'];

//     })
// }
}
