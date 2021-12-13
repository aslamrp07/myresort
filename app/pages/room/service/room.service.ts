import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const roomUrl = 'http://localhost:3000/api/rooms';
//const roomUrl='http://localhost:3000/api/rooms/list/6191f939ba267f195e3b5c15'
@Injectable({
  providedIn: 'root',
})

export class RoomService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  roomList(): Observable<any> {
    return this.http.get('http://localhost:3000/api/rooms/list/61a05688ab74b9061bfa6986');
    //return this.http.get(`${roomUrl}/list/${'6191f939ba267f195e3b5c15'}`);

  }

  roomAdd(obj: any): Observable<any> {
    return this.http.post((`${roomUrl}/add`), obj);
  }

}
