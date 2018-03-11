import { Component, OnInit, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent implements OnInit {
  @Input() navItems: any;
  items: any;
  json = JSON;
  constructor() {
    this.json = JSON;
   }

  ngOnInit() {
  }

  setActive(item, collection){
    console.log(item, collection)
  }
}
