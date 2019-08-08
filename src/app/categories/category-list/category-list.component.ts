import {Component,OnInit, OnChanges, Input} from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryType } from '../Category-type.component';


@Component({
  selector:'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit{
categories:Category[];
categoriess: Observable<Category[]>;
@Input() catType: CategoryType;
category: {name:string};
paramsSubscription: Subscription
constructor(private catService:CategoryService,private route:ActivatedRoute) {


}

ngOnInit(){
  this.category = {
    name:this.route.snapshot.params['name'],
  };
 // this.catService.selectedItem = CategoryType.Shoes;
  console.log(this.catService.setType(this.catType));
  var re:Category[];
  var a = CategoryType.Gowns;

  this.paramsSubscription = this.route.params
  .subscribe(
    ((params: Params) =>{
      if (params['name']) {
        this.category.name = params['name'];
        var catName = this.category.name.replace(this.category.name.charAt(0),this.category.name.charAt(0).toUpperCase());
        this.catService.GetProductByCategory(catName).subscribe(
          (res: Category[]) =>{
            this.categories =res;
            var myDb = [];


            res.forEach(obj=>{
              console.log('obj.cattype: '+obj._CategoryType);
                let category:Category = obj as Category;
                category = new Category(category._Name,category._Description,category._Price,category._ImagePath,category._Size,category._Number,category._ProductId,category._CategoryType);
                myDb.push(category);
console.log("category details list is: "+category._ImagePath);
            }),
            this.categories = res;
            console.log('res: '+this.categories);
          }
        );
      // if(this.category.name === 'gowns'){

      //  this.categories = this.catService.getGowns();
      //   this.catService.setType(CategoryType.Gowns);
      //   //this.catType = CategoryType.Gowns;
      //   console.log("In gowns");
      //   console.log(this.categories);
      // }
      // if(this.category.name === 'e'){

      //   this.categories = this.catService.getGowns();
      //    this.catService.setType(CategoryType.Gowns);
      //    //this.catType = CategoryType.Gowns;
      //    console.log("In gowns");
      //    console.log(this.categories);
      //  }
      // else if(this.category.name === 'shirts'){
      //   this.categories = this.catService.getShirts();
      //   this.catService.setType(CategoryType.Shirts);

      //  // this.catService.selectedItem = CategoryType.Shirts;
      //   console.log("In shirts");
      //   console.log(this.categories);
      // }
      // else if(this.category.name === 'bags'){
      //   this.categories = this.catService.getBags();
      //   this.catService.setType(CategoryType.Bags);
      //   // this.catService.selectedItem = CategoryType.Bags;
      //   console.log("In shirts");
      //   console.log(this.categories);
      // }
      // else if(this.category.name === 'shoes'){
      //   this.categories = this.catService.getShoes();
      //   this.catService.setType(CategoryType.Shoes);
      //   console.log("In shirts");
      //   console.log(this.categories);
      // }
      // else if(this.category.name === 'jeans'){
      //   this.categories = this.catService.getJeans();
      //   this.catService.setType(CategoryType.Jeans);
      //   console.log("In shirts");
      //   console.log(this.categories);
      // }
      // else if(this.category.name === 'skirts'){
      //   this.categories = this.catService.getSkirts();
      //   this.catService.setType(CategoryType.Skirts);
      //   console.log("In shirts");
      //   console.log(this.categories);
      // }
      // else if(this.category.name === 'pants'){
      //   this.categories = this.catService.getPants();
      //   this.catService.setType(CategoryType.Pants);
      //   console.log("In shirts");
      //   console.log(this.categories);
      // }
      // else{
      //   this.categories = [];
      // }
      }
    })

  );



}
}
/**
 *  if(this.category.name === 'gowns'){
        var catName = this.category.name.charAt(0).toUpperCase();
       this.categories = this.catService.getGowns();
        this.catService.setType(CategoryType.Gowns);
        //this.catType = CategoryType.Gowns;
        console.log("In gowns");
        console.log(this.categories);
      }
      else if(this.category.name === 'shirts'){
        this.categories = this.catService.getShirts();
        this.catService.setType(CategoryType.Shirts);

       // this.catService.selectedItem = CategoryType.Shirts;
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'bags'){
        this.categories = this.catService.getBags();
        this.catService.setType(CategoryType.Bags);
        // this.catService.selectedItem = CategoryType.Bags;
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'shoes'){
        this.categories = this.catService.getShoes();
        this.catService.setType(CategoryType.Shoes);
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'jeans'){
        this.categories = this.catService.getJeans();
        this.catService.setType(CategoryType.Jeans);
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'skirts'){
        this.categories = this.catService.getSkirts();
        this.catService.setType(CategoryType.Skirts);
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'pants'){
        this.categories = this.catService.getPants();
        this.catService.setType(CategoryType.Pants);
        console.log("In shirts");
        console.log(this.categories);
      }
      else{
        this.categories = [];
      }
      }
 */
