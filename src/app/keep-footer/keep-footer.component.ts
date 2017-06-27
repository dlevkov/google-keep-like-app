import { Component, OnInit, Input } from '@angular/core';
import { KeepModel } from 'app/content/models/keep-model';

@Component({
  selector: 'dl-keep-footer',
  templateUrl: './keep-footer.component.html',
  styleUrls: ['./keep-footer.component.css']
})
export class KeepFooterComponent implements OnInit {
  @Input() keeps: KeepModel[];
  constructor() { }

  ngOnInit() {
  }

}
