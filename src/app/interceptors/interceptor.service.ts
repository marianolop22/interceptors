import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 

    console.log ( 'pasó por el interceptor');

    const headers = new HttpHeaders(
      {
        'token-usuario': 'ABASDLFKASASDFA1234123412432'
      }
    );

    const requestClone = req.clone(
      {
        headers
      }
    );
    return next.handle( requestClone ).pipe (

      catchError ( error => {

        return this.handleError (error);


      })


    );
    //throw new Error("Method not implemented.");
  }

  handleError ( error: HttpErrorResponse) {
    console.log ('error ', error);
    console.warn ('error de warn');
    return throwError('eorror personalizado');
  }




}
