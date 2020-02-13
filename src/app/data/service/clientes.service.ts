import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import 'firebase/database';

import { HttpHandlerErrorService } from '@app/core/service/error/http-handler-error.service';
import { Cliente } from '@model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  cliente: AngularFireList<Cliente>;

  constructor(private db: AngularFireDatabase, private errorHandler: HttpHandlerErrorService) {   }

  getClientes() {
    return this.db.list<Cliente>('CARTOLAS/TB_SCC_CLI', ref => ref.limitToFirst(10)).valueChanges()
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

  createCliente(cliente: Cliente ) {
    return from(this.db.list<Cliente>('CARTOLAS/TB_SCC_CLI').push(cliente))
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

  updateCliente(cliente: Cliente, id) {

    console.log('updcli', cliente, id );

    this.db.list('CARTOLAS/TB_SCC_CLI').update(id, cliente)
    .then( data => {
        console.log('data', data);
      })
      .catch(error => {
        console.error(error);
      });
    /*return from(this.db.list('CARTOLAS/TB_SCC_CLI').update(id, cliente))
    .pipe(
      catchError(this.errorHandler.haldler)
    );*/
  }

  deleteCliente( id ) {
    return from(this.db.list('CARTOLAS/TB_SCC_CLI/' + id).remove())
    .pipe(
      catchError(this.errorHandler.haldler)
    );
  }

}

