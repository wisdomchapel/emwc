import { Injectable } from '@angular/core';
import { Testimony } from '../testimony.model';
import { TestimonyType } from '../Testimony-type.component';
import { Countries } from '../countries.component';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError,map,tap } from 'rxjs/operators';
import { Response, RequestOptions } from "@angular/http";
import {throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()

export class TestimonyService{


  constructor(private router:Router, private http:HttpClient){

  }
th:string;
testimonySubChanged = new Subject<Testimony[]>();
urlCategories = "https://localhost:5001/api/Category";

  private testimonies:Testimony[]=[

    new Testimony('Omo','hf@fj.com',TestimonyType[TestimonyType.Healing],
    'Female',Countries[Countries.Nigeria],new Date(Date.now()),'ghrkjd'),
    new Testimony('Togo','hf@fj.com',TestimonyType[TestimonyType.Marriage],
    'Female',Countries[Countries.Nigeria],new Date(Date.now()),'Praise the Lord'),
  ];
  public _serverError(err: any): Observable<any> {
    console.log('server error:', err);  // debug
    if (err instanceof Response) {
        return observableThrowError(err.json().error || 'backend server error');

    }
    return observableThrowError(err || 'backend server error');
}
  getTestimonies(){
    return this.testimonies.slice();
  }

  PostTestimony(testimony:Testimony):Observable<any[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(this.urlCategories,JSON.stringify(testimony),{headers
    }).pipe(catchError(this._serverError));
  }

  addTestimonytoList(testimony:Testimony){
    this.testimonies.push(testimony);
    this.testimonySubChanged.next([...this.testimonies]);

  }

  PostTestimonyFrontEnd(testimony:Testimony):Observable<any[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(this.urlCategories,JSON.stringify(testimony),{headers
    }).pipe(catchError(this._serverError));
  }

}
