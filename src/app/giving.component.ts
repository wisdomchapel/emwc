import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { GivingType } from "./Giving-type.component";
import { Countries } from "./countries.component";
// import * as i18nIsoCountries from 'i18n-iso-countries';

@Component({
  selector: 'app-giving',
  templateUrl: './giving.component.html',
  // styleUrls: ['./mountain-experience.component.css']
  })

  export class GivingComponent implements OnInit{

    form : FormGroup;
    Name:string;
    Email:string;
    Amount: number;
    Sex:string;
    Title:string;
    Giving: string;
    Country: string;
    Currency:string;
    PhoneNumber:string;
    tmpArr;
    // testimonies:Array<Giving>;
    saved:boolean;
    ProductId:string;

    givingTypes = Object.keys(GivingType);
    sexes:Array<string> = ['Male','Female'];
    countries = Object.keys(Countries);
    currencies:Array<string> = ['NGN','USD'];
    // catNames = Object.keys(CategoryType)
    // .filter(k => typeof CategoryType[k] === "number") as string[];


    constructor(){}

    ngOnInit(){
  //     i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  //     let valueName = '';
  //  this.tmpArr = this.tmpArr.map((e) => {
  //     const tmp = e.split('_')[1];
  //     console.log('tmp: ' + tmp);
  //     // console.log(i18IsoCountries);
  //     valueName = i18nIsoCountries.getName(tmp, 'en');
  //     return tmp;
  //   });
    }

    Give(){

    }

  }

  // locationData = {
  //   country: any,
  //   state: any,
  //   city: any
  // }

