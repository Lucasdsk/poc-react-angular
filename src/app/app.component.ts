import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "@services/local-storage.service";
import { Language } from "@enums/language.enum";

const ITENS_MENU = [
  {
    name: "Home",
    path: "/home",
    id: "menu.home"
  },
  {
    name: "Listagem",
    path: "/listing",
    id: "menu.list"
  }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";
  itemsMenu = ITENS_MENU;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    if (!this.localStorageService.getItem("lang")) {
      console.log("key setted");
      this.localStorageService.saveItem("lang", Language.PT_BR);
    }
  }
}
