import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Endpoints } from '@global/endpoints';

import { HttpHandlerErrorService } from '@core/service/error/http-handler-error.service';
import { Sucursal } from '@model/sucursal.model';

@Injectable({
  providedIn: 'root'
})

export class SucursalService {

  constructor(private http: HttpClient, private errorHandler: HttpHandlerErrorService) { }

  getSucursales() {
    return this.http.get<Sucursal[]>( Endpoints.URL_SUCURSAL )
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

  getSucursal( id: number ) {
    return this.http.get<Sucursal>( `${Endpoints.URL_SUCURSAL}/${id}` )
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

  createSucursal( sucursal: Sucursal ) {
    return this.http.post( Endpoints.URL_SUCURSAL, sucursal )
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

  updateSucursal( id: string, sucursal: Sucursal ) {
    return this.http.put(`${Endpoints.URL_SUCURSAL}/${id}`, sucursal )
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

  deleteSucursal( id: string, sucursal: Sucursal ) {
    return this.http.delete( `${Endpoints.URL_SUCURSAL}/${id}` )
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

  getFile() {
    return this.http.get('asset/file/test.txt', {responseType: 'text'});
  }
}


