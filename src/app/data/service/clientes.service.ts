import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';

import { HttpHandlerErrorService } from '@app/core/service/error/http-handler-error.service';
import { Cliente } from '@model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor(private db: AngularFireDatabase, private errorHandler: HttpHandlerErrorService) {   }

  getClientes() {
   return this.db.list<Cliente>('CARTOLAS/TB_SCC_CLI', ref => ref.limitToFirst(10)).valueChanges()
   .pipe(
    catchError(this.errorHandler.haldler)
  );
  }

}

