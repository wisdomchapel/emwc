import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {
  categories:Category[];
  category: {name:string};
  paramsSubscription: Subscription
  selectedItem: Category;
  open:boolean = false;

  @Input() itemSelect : boolean = false;

  constructor(private catService: CategoryService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.catService.itemSelected.subscribe(
      (category: Category) =>{
        this.selectedItem = category;
      }
    );
  //   this.category = {
  //     name:this.route.snapshot.params['name'],
  //   };
  //   this.paramsSubscription = this.route.params
  //   .subscribe(
  //     (params: Params) =>{
  //       this.category.name = params['name'];
  //       if(this.category.name === 'gowns'){
  //         this.categories = this.catService.getGowns();
  //         console.log("In gowns");
  //         console.log(this.categories);
  //       }
  //       else if(this.category.name === 'shirts'){
  //         this.categories = this.catService.getShirts();
  //         console.log("In shirts");
  //         console.log(this.categories);
  //       }
  //       else if(this.category.name === 'bags'){
  //         this.categories = this.catService.getBags();
  //         console.log("In shirts");
  //         console.log(this.categories);
  //       }
  //       else if(this.category.name === 'shoes'){
  //         this.categories = this.catService.getShoes();
  //         console.log("In shirts");
  //         console.log(this.categories);
  //       }
  //       else if(this.category.name === 'jeans'){
  //         this.categories = this.catService.getJeans();
  //         console.log("In shirts");
  //         console.log(this.categories);
  //       }
  //       else if(this.category.name === 'skirts'){
  //         this.categories = this.catService.getSkirts();
  //         console.log("In shirts");
  //         console.log(this.categories);
  //       }
  //       else if(this.category.name === 'pants'){
  //         this.categories = this.catService.getPants();
  //         console.log("In shirts");
  //         console.log(this.categories);
  //       }
  //       else{
  //         this.categories = [];
  //       }
  //     }

  //   );


   }

}
