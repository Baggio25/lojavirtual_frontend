import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjetoInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var authorization = '' + localStorage.getItem("Authorization");

    if(authorization !== '') {
      console.log('Token JWT: ' + authorization);

    }

    return next.handle(request);
  }
}
