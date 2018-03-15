import { Component } from '@angular/core';


const ITENS_MENU = [
  {
    name: "Home",
    path: "/home"
  },
  {
    name: "Listagem",
    path: "/listing"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  itemsMenu = ITENS_MENU;

}
