import { Injectable } from '@angular/core';
import { KeepModel } from 'app/content/models/keep-model';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'app/content/services/api.service';

@Injectable()
export class KeepService {

  constructor(private api: ApiService) {
  }

  // Simulate POST /keeps
  addItem(keepItem: KeepModel): Observable<KeepModel> {
    return this.api.createNote(keepItem);
  }

  // Simulate DELETE /keeps/:id
  deleteItemById(keepItemId: number): Observable<KeepModel> {
    return this.api.deleteNoteById(keepItemId);
  }

  // Simulate PUT /keeps/:id
  updateItem(keepItem: KeepModel): Observable<KeepModel> {
    return this.api.updateNote(keepItem);
  }

  // Simulate GET /keeps
  getAllItems(): Observable<KeepModel[]> {
    return this.api.getAllNotes();
  }

  // Simulate GET /keeps/:id
  getItemById(keepItemId: number): Observable<KeepModel> {
    return this.api.getNoteById(keepItemId);
  }

  // Toggle complete
  toggleItemComplete(keepItem: KeepModel) {
    keepItem.complete = !keepItem.complete;
    return this.api.updateNote(keepItem);
  }

}
