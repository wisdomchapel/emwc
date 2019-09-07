import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).click(function(e) {
      if (!$(e.target).is('.navbar')) {
          $('.collapse').collapse('hide');
        }
    });
  }

}
