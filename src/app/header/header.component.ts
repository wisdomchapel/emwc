import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Output() pageSelected = new EventEmitter<string>();
  showGownCats: boolean;

  onSelect(page:string){
     this.pageSelected.emit(page);
  }
  constructor() { }

  ngOnInit() {
  }

  Search(){

  }
  openGownDialog(){
    console.log(this.showGownCats);
    this.showGownCats = true;
    console.log(this.showGownCats);
  }
  cancelAction(){
    this.showGownCats = false;
    return false;
  }
}
