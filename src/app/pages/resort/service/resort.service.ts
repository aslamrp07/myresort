import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000/api/resort/add';
const getUrl = 'http://localhost:3000/api/resort/list';

@Injectable({
  providedIn: 'root',
})
export class ResortService {
  constructor(private http: HttpClient) {}

  resortAdd(obj: any): Observable<any> {
    return this.http.post(baseUrl, obj);
  }

  resortList(): Observable<any> {
    return this.http.get(getUrl);
  }
}
