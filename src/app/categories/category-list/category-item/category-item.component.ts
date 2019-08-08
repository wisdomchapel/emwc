import { Component, Input, OnInit } from "@angular/core";
import { Category } from "../../category.model";
import { CategoryService } from "../../category.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoryType } from "../../Category-type.component";
import { DomSanitizer } from '@angular/platform-browser';
// import { _getComponentHostLElementNode } from "@angular/core/src/render3/instructions";
// import { CategoryService } from "../../category.service";
// import { CategorysComponent } from "../../categorys.component";


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})

export class CategoryItemComponent implements OnInit{
@Input() category:Category;
cattType:CategoryType;
@Input() itemSelect: boolean = true;
@Input() index:number;

itemSelected: boolean = true;

constructor(private router: Router, private route: ActivatedRoute,private catService:CategoryService,public domSanitizer:DomSanitizer) {

}

ngOnInit(){

  // this.category._ImagePath = this.category._ImagePath
  console.log("Category in category item ", this.category);
  console.log(this.catService);
  console.log(this.route);
  console.log('category item list: '+this.category._ImagePath);

//this.catService.getBase64ImageFromURL(this.category._ImagePath)
}

onGoToDetail(yu){
  this.catService.selectedItemSubject.next(yu._CategoryType);
  this.catService.sample = 1;
this.router.navigate(['category-detail',yu._CategoryType,this.index]);
console.log('categorytype is: '+yu._CategoryType);
}

// onSelected(){
//   this.categoryService.itemSelected.emit(this.category);
//   console.log('item selected',this.categoryService.itemSelected);
// this.itemSelect = !this.itemSelect;
// this.itemSelected = !this.itemSelected;


// }
}


