import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuListData } from './menuListData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: MenuItem[] = MenuListData;
  constructor() { }

  ngOnInit() {
  }

}
