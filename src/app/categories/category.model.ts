import { Item } from "../shared/Item.model";
import { CategoryType } from "./Category-type.component";
import { State } from "./State.component";
// import { string } from "../string.component";

export class Category{
  // public _ProductId: string;
  //public _Name:string;
  // public _Description: string;
  // public _Price:number;
  // public _ImagePath:string;
  public itemBought: Item[];
  // public _Size:string;
  // public _CategoryType:CategoryType;
  // public _Number:number;
  public state:State;
  File: File;

  /**
   *
   */
  constructor(public _Name:string,public _Description:string,public _Price:number,public _ImagePath:string, public _Size:string,public _Number:number,public _ProductId:string,public _CategoryType:CategoryType) {
    // , _file?: File
    this._Name = _Name;
    this._Description = _Description;
    this._Price = _Price;
    this._ImagePath = _ImagePath;
    // this.File = _file;
    this._Size = _Size;
    this._CategoryType = _CategoryType;
    this._ProductId = _ProductId;
    this._Number = _Number;
  }

}
