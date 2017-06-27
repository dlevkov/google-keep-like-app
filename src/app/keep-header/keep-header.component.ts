import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { KeepModel } from 'app/content/models/keep-model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dl-keep-header',
  templateUrl: './keep-header.component.html',
  styleUrls: ['./keep-header.component.css']
})
export class KeepHeaderComponent implements OnInit {
  form: FormGroup;

  @Input() keeps: KeepModel[];
  @Output() add: EventEmitter<KeepModel> = new EventEmitter();

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  private generateNewKeep(title: string): KeepModel {
    return new KeepModel({ id: this.keeps.length, title: title });
  }

  onAdd(value: any) {
    const tmpKeep = this.generateNewKeep(value.title);
    this.add.emit(tmpKeep);
  }
}
