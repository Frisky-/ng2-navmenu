import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class NavigationComponent implements OnInit {
  menu: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(){
    this.http.get('./assets/menu.json').map(data => {
      return data;
    }, err => {
      return  err;
    }).subscribe(data => {
      this.menu = data;
    }, err => {
      console.log(err)
    }, () => {
    })
  }
  

}
