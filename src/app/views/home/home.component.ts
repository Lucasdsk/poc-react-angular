import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Item } from "./items.model";

const MOCK_ITEMS = [
  { name: "Fulano", age: "21", email: "fulano@hbsis.com.br" },
  { name: "Ciclano", age: "22", email: "ciclano@hbsis.com.br" },
  { name: "Beltrano", age: "23", email: "beltrano@hbsis.com.br" }
];

function generateRandomItems() {
  let array = [];
  for (let i = 1; i <= 1000; i++) {
    array.push({
      ...MOCK_ITEMS[Math.floor(MOCK_ITEMS.length * Math.random())],
      id: i
    });
  }

  return array;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  personList: Item[] = generateRandomItems() || [];

  constructor(private modalService: NgbModal) {}

  open = (content) => {
    this.modalService.open(content).result.then((result) => {
      console.log('result', result)
    })
  }

  handleRemoveItem = (indexItem: number) => {
    console.log('handleRemoveItem', indexItem)
    this.personList = [
      ...this.personList.slice(0, indexItem),
      ...this.personList.slice(indexItem + 1)
    ]
  };
}
