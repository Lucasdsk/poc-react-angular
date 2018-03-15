import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../views/home/items.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items : Item[] = [];
  @Output() onRemoveItem = new EventEmitter<number>();

  handleRemoveItem = (index: number) => {
    this.onRemoveItem.emit(index);
  }
}
