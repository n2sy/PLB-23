import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Request before', request);

    if (request.method != 'GET') {
      let token = localStorage.getItem('myToken');
      if (token) {
        let cloneRequest = request.clone({
          headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
        });
        console.log('Request after', cloneRequest);

        return next.handle(cloneRequest);
      }
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}

export const addTokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AddTokenInterceptor,
  multi: true,
};
