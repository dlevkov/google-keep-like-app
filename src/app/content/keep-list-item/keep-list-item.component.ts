import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { KeepModel } from 'app/content/models/keep-model';

@Component({
  selector: 'dl-keep-list-item',
  templateUrl: './keep-list-item.component.html',
  styleUrls: ['./keep-list-item.component.css']
})
export class KeepListItemComponent implements OnInit {
  @Input() keep: KeepModel;
  @Output() remove: EventEmitter<KeepModel> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<KeepModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onToggleComplete(keep: KeepModel) {
    this.toggleComplete.emit(keep);
  }

  onRemove(keep: KeepModel) {
    this.remove.emit(keep);
  }
}
