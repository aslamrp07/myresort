import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FinishAsyncLoad, StartAsyncLoad } from '../action/async.actions';
import { AsyncState } from '../state/async.state';

@Injectable()
export class AsyncService {
  @Select(AsyncState.isLoading) isLoading: Observable<boolean>;

  constructor(private store: Store) {}

  start(): void {
    this.store.dispatch(new StartAsyncLoad());
  }

  finish(): void {
    this.store.dispatch(new FinishAsyncLoad());
  }
}
