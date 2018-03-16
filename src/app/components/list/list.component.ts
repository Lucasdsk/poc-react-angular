import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '@models/pessoa.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items : Pessoa[] = [];
  @Output() onRemoveItem = new EventEmitter<number>();

  handleRemoveItem = (index: number) => {
    this.onRemoveItem.emit(index);
  }
}
