import { Component, OnInit, Input } from '@angular/core';
import { Testimony } from 'src/app/testimony.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimony-item',
  templateUrl: './testimony-item.component.html',
  styleUrls: ['./testimony-item.component.css']
})
export class TestimonyItemComponent implements OnInit {

  @Input() testimony: Testimony;
  @Input() itemSelect: boolean = true;
@Input() index:number;

itemSelected: boolean = true;
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
