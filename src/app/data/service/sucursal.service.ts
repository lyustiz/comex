import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Endpoints } from '@global/endpoints';
import { Sucursal } from '@model/sucursal.model';

@Injectable({
  providedIn: 'root'
})

export class SucursalService {

  constructor(private http: HttpClient) { }

  getSucursales() {
    return this.http.get<Sucursal[]>( Endpoints.URL_SUCURSAL )
    .pipe(
      catchError(this.haldlerError)
    );
  }

  getSucursal( id: number ) {
    return this.http.get<Sucursal>( `${Endpoints.URL_SUCURSAL}/${id}` )
    .pipe(
      catchError(this.haldlerError)
    );
  }

  createSucursal( sucursal: Sucursal ) {
    return this.http.post( Endpoints.URL_SUCURSAL, sucursal )
    .pipe(
      catchError(this.haldlerError)
    );
  }

  updateSucursal( id: string, sucursal: Sucursal ) {
    return this.http.put(`${Endpoints.URL_SUCURSAL}/${id}`, sucursal )
    .pipe(
      catchError(this.haldlerError)
    );
  }

  deleteSucursal( id: string, sucursal: Sucursal ) {
    return this.http.delete( `${Endpoints.URL_SUCURSAL}/${id}` )
    .pipe(
      catchError(this.haldlerError)
    );
  }

  getFile() {
    return this.http.get('asset/file/test.txt', {responseType: 'text'});
  }

  private haldlerError(error: HttpErrorResponse) {
    return throwError('ups. algo salio mal');
  }
}

