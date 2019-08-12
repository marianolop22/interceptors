import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http:HttpClient
  ) { }

  getUser (): Observable<any> {

    let params = new HttpParams().append('page', '1');
    params= params.append ('nombe', 'Mariano L');

    // const headers = new HttpHeaders(
    //   {
    //     'token-usuario': 'ABASDLFKASASDFA1234123412432'
    //   }
    // );


    return this.http.get ( 'https://reqres.in/api/user', {
      params
      //headers
    } ).pipe (
      map ( response=> {
        return response ['data'];
      })
      //,
      //catchError ( error => {
        // console.log ('error ', error);
        // return throwError('eorror personalizado');
//        return this.handleError (error);
      //})


    );
  }

  handleError ( error: HttpErrorResponse) {
    console.log ('error ', error);
    console.warn ('error de warn');
    return throwError('eorror personalizado');
  }





}
