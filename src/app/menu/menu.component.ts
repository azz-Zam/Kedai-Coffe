import { Component } from '@angular/core';

import { menus } from '../menus';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menus = menus;

  share() {
    window.alert('The Product has been shared!');
  }
}
