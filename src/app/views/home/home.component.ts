import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Pessoa } from "@models/pessoa.model";

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
  personList: Pessoa[] = generateRandomItems() || [];
  pessoa: Pessoa = new Pessoa();
  openedModal: any;

  constructor(private modalService: NgbModal) {}

  open = content => {
    this.openedModal = this.modalService.open(content);
  };

  save = content => {
    this.personList = [
      ...this.personList,
      {
        ...this.pessoa,
        id: this.personList[this.personList.length - 1].id + 1
      }
    ];

    this.openedModal.close();
  };

  handleRemoveItem = (indexItem: number) => {
    this.personList = [
      ...this.personList.slice(0, indexItem),
      ...this.personList.slice(indexItem + 1)
    ];
  };
}
