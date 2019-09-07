import { State } from "./categories/State.component";
import { TestimonyType } from './Testimony-type.component';
import { Countries } from './countries.component';


export class Testimony{

  public state:State;
  /**
   *
   */
  constructor(public _Name:string,public _Email:string,public _Title:TestimonyType,public _Sex:string,public _Country:Countries,
    public _Date:Date,public _Testimony:string) {
    this._Name = _Name;
    this._Email = _Email;
    this._Title = _Title;
    this._Sex = _Sex;
    this._Country = _Country;
    this._Date = _Date
    this._Testimony = _Testimony;
  }

}

export class Prayer{
  public state:State;
  /**
   *
   */
  constructor(public _Name:string,public _Email:string,public _Title:string,public _Sex:string,public _Country:Countries,
   public Prayer:string) {
    this._Name = _Name;
    this._Email = _Email;
    this._Title = _Title;
    this._Sex = _Sex;
    this._Country = _Country;
    this.Prayer = Prayer;
  }

}
