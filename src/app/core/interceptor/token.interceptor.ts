import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private token: string;

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addToken(request);
    return next.handle(request);
  }

  private addToken( request: HttpRequest<any> ) {

    this.token = 'kbfwviwviwleasvff786s8fghs';
    if ( this.token ) {
      request = request.clone({
        setHeaders: {
          token: this.token,
        }
      });
    }
    return request;
  }
}
