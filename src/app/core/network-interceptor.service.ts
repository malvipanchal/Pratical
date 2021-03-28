import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { finalize } from "rxjs/operators";
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkInterceptorService implements HttpInterceptor {

  private subject = new Subject<any>();
  constructor(private dataSer: DataServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.dataSer.boradcast('spinner', true)
    return next.handle(req).pipe(
      finalize(() =>
        this.dataSer.boradcast('spinner', false)
      )
    );
  }
}
