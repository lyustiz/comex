import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList,  } from '@angular/fire/database';
import 'firebase/database';

import { HttpHandlerErrorService } from '@app/core/service/error/http-handler-error.service';
import { Cliente } from '@model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  cliente: Cliente;
  clientes: AngularFireList<Cliente>;

  constructor(private db: AngularFireDatabase, private errorHandler: HttpHandlerErrorService) {  }

  getClientes() {

    this.clientes = this.db.list<Cliente>('CARTOLAS/TB_SCC_CLI', ref => ref.limitToFirst(10));

    return  this.clientes.snapshotChanges()
    .pipe(
       map(actions => actions.map(data => {
        return { key: data.key, ...data.payload.val() };
      })),
      catchError(this.errorHandler.haldler)
    );
  }

  createCliente(cliente: Cliente ) {
    this.clientes.push(cliente);
  }

  updateCliente(cliente: Cliente, id: string) {
    this.clientes.update(id, cliente);
  }

  deleteCliente( id: string ) {
    this.clientes.remove(id);
  }

}

