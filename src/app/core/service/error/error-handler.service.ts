import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  public haldler(error: HttpErrorResponse) {
    return throwError('ups. algo salio mal');
  }
}
