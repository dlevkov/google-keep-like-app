import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeepModel } from 'app/content/models/keep-model';

@Component({
  selector: 'dl-keep-list',
  templateUrl: './keep-list.component.html',
  styleUrls: ['./keep-list.component.css']
})
export class KeepListComponent {
  @Input() keeps: KeepModel[];
  @Output() remove: EventEmitter<KeepModel> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<KeepModel> = new EventEmitter();

  onToggleComplete(keep: KeepModel) {
    this.toggleComplete.emit(keep);
  }
  onRemove(keep: KeepModel) {
    this.remove.emit(keep);
  }
}
