import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const resortUrl = 'http://localhost:3000/api/resort';
// const getUrl = 'http://localhost:3000/api/resort/list';

@Injectable({
  providedIn: 'root',
})
export class ResortService {
  constructor(private http: HttpClient) {}

  resortAdd(obj: any): Observable<any> {
    return this.http.post((`${resortUrl}/add`), obj);
  }

  resortList(): Observable<any> {
    return this.http.get(`${resortUrl}/list`);
  }

  getResortById(id: string): Observable<any> {
    return this.http.get(`${resortUrl}/details/${id}`);
  }
deleteResortId(id: string ):Observable<any>{
  return this.http.delete(`${resortUrl}/delete/${id}`);
}
getResortAutoComplete(item: string): Observable<any> {
  // return this.http.post(`${resortUrl}/autocomplete`, { item });
  return this.http.post(`${resortUrl}/autocomplete`, { item }).pipe(
    map((response: any) =>
      response.isExecuted && response.data ? response.data : []
    ),
    catchError((error) => of([]))
  );
}

}
