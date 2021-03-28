import { Injectable } from '@angular/core';
// import { Subject, Subscription } from 'rxjs';
import {
  Observable, Subject, Subscription, asapScheduler, pipe, of, from,
  interval, merge, fromEvent
} from 'rxjs';

// import 'rxjs/add/operator/filter'
import { filter } from 'rxjs/operators';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  private _handler: Subject<any> = new Subject<any>();

  boradcast(type: string, payload: any) {
    this._handler.next({ type, payload });
  }

  subscribe(type: string, callback: (payload: any) => void): Subscription {
    return this._handler
      // .filter((message) => message.type === type)
      // .map(message => message.payload)
      .subscribe(callback);
  }
}
