import { Component, OnInit } from '@angular/core';
import { KeepModel } from 'app/content/models/keep-model';
import { KeepService } from 'app/content/services/keep.service';

@Component({
  selector: 'dl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keeps: KeepModel[] = [];

  constructor(private _service: KeepService) {

  }
  public ngOnInit() {
    this._service
      .getAllItems().subscribe((x) => {
        this.keeps = x;
      });
  }
  onAdd(keep) {
    this._service
      .addItem(keep).subscribe((x) => {
        this.keeps = this.keeps.concat(x);
        console.log('app add', x);
      });
  }
  onToggleComplete(keep) {
    this._service
      .toggleItemComplete(keep).subscribe((x) => {
        keep = x;
      });
  }
  onRemove(keep) {
    this._service.deleteItemById(keep.id).subscribe((_) => {
      this.keeps = this.keeps.filter((t) => t.id !== keep.id);
    });
  }
}
