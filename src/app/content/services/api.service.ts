import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { KeepModel } from 'app/content/models/keep-model';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;
@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  public getAllNotes(): Observable<KeepModel[]> {
    return this.http
      .get(API_URL + '/keeps')
      .map(response => {
        const keeps = response.json();
        return keeps.map((item) => new KeepModel(item));
      })
      .catch(this.handleError);
  }

  public createNote(keep: KeepModel): Observable<KeepModel> {
    return this.http
      .post(API_URL + '/keeps', keep)
      .map(response => {
        return new KeepModel(response.json());
      })
      .catch(this.handleError);
  }

  public getNoteById(keepId: number): Observable<KeepModel> {
    return this.http
      .get(API_URL + '/keeps/' + keepId)
      .map(response => {
        return new KeepModel(response.json());
      })
      .catch(this.handleError);
  }

  public updateNote(keep: KeepModel): Observable<KeepModel> {
    return this.http
      .put(API_URL + '/keeps/' + keep.id, keep)
      .map(response => {
        return new KeepModel(response.json());
      })
      .catch(this.handleError);
  }

  public deleteNoteById(keepId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/keeps/' + keepId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
