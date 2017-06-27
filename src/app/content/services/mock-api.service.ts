import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { KeepModel } from 'app/content/models/keep-model';

@Injectable()
export class MockApiService {
  keeps: KeepModel[];
  constructor() {
    this.keeps = [
      new KeepModel({ id: 1, title: 'Item 1', complete: false }),
      new KeepModel({ id: 2, title: 'Item 2', complete: false }),
      new KeepModel({ id: 3, title: 'Item 3', complete: false })
    ]
  }
  public getAllNotes(): Observable<KeepModel[]> {
    return Observable.of(this.keeps);
  }

  public createNote(keep: KeepModel): Observable<KeepModel> {
    this.keeps.push(keep);
    return this.getNoteById(keep.id);
  }

  public getNoteById(keepId: number): Observable<KeepModel> {
    return Observable.of(this.keeps.find(x => x.id === keepId));
  }

  public updateNote(keep: KeepModel): Observable<KeepModel> {
    const item = this.keeps[this.keeps.findIndex(x => x.id === keep.id)];
    item.title = keep.title;
    item.complete = keep.complete;
    return this.getNoteById(keep.id);
  }

  public deleteNoteById(keepId: number): Observable<null> {
    const index = this.keeps.findIndex(x => x.id === keepId);
    this.keeps.slice(index, 1);
    return Observable.of(null);
  }
}
