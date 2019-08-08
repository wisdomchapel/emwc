import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Category } from '../categories/category.model';
import { CategoryType } from '../categories/Category-type.component';
import { Item } from '../shared/Item.model';
import { State } from '../categories/State.component';
import { CategoryService } from '../categories/category.service';
import { SizeVarType } from '../SizeVarType.component';


@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css']
})
export class PostItemsComponent implements OnInit {

  form : FormGroup;
  selectedFile:File;
  categories:Array<Category>;
  Name:string;
  Description:string;
  Price:number;
  ImagePath:string;
  //itemBt:Item[];
  saved:boolean;
  Size:string;
  ProductId:string;
  CategoryType:CategoryType;
  categoryTypes: CategoryType[];
  currentCategory:Category;
  Number:number;
  keys = Object.keys;

   catNames = Object.keys(CategoryType)
   .filter(k => typeof CategoryType[k] === "number") as string[];

  sizeNames = Object.keys(SizeVarType)
   .filter(k=>typeof SizeVarType[k] === "number") as string[];

   numbers = [];


  @ViewChild('fileInput',{static:true}) fileInput : ElementRef;

  constructor(private catService:CategoryService) {
    this.categories = [];
    this.numbers = new Array(10).fill(0).map((x,i)=>i);
    // this.createForm();private fb:FormBuilder
  }

  ngOnInit() {

  }
  // createForm(){
  //   this.form = this.fb.group({
  //     name:['',Validators.required],
  //     picture:null
  //   });
  // }

  onFileChange(event){
    this.selectedFile = <File>event.target.files[0];
    console.log('ss', this.selectedFile);
    this.ImagePath = 'https://res.cloudinary.com/omowunmi/image/upload/v1561463682/'+this.selectedFile.name;

    //let reader = new FileReader();
    // if(event.target.files && event.target.files.length > 0){
    //   let file = event.target.files[0];
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.form.get('picture').setValue({
    //       filename: file.name,
    //       filetype: file.type,
    //       value: reader.result.split(',')[1]
    //     })
    //   }
    // }
  }
  PostCategory(category){
    this.catService.PostTestimony(category).subscribe(
      res => {console.log("res = ", res), this.saved = true},
      err => console.log(err)
    );
  }

  // UploadCategory(ProductId,category,file){

  // }
  SaveCategory(){
      let category:Category;

      category = new Category(this.Name,this.Description,this.Price,this.ImagePath,this.Size,this.Number,this.ProductId,
        this.CategoryType);
        // , this.selectedFile
        category._CategoryType = this.CategoryType;
        category.state = State.New;
        this.categories.push(category);
        this.currentCategory = category;
        //this.catService.urlCategory()
        this.catService.UploadImage(this.ProductId,category._CategoryType,this.selectedFile).
        subscribe(

          res => console.log("response is: ",res),
          error => console.log(error)
        );
        this.PostCategory(category);


        this.saved = false;

      //catgeory = new Category(this.Name,this.Description,this.Price,this.ImagePath,)
  }

}
