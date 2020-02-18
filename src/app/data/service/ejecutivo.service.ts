import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList,  } from '@angular/fire/database';
import 'firebase/database';

import { HttpHandlerErrorService } from '@app/core/service/error/http-handler-error.service';
import { Ejecutivo } from '@model/ejecutivo.model';

@Injectable({
  providedIn: 'root'
})
export class EjecutivoService {

  ejecutivo: Ejecutivo;
  ejecutivos: AngularFireList<Ejecutivo>;

  constructor(private db: AngularFireDatabase,
              private errorHandler: HttpHandlerErrorService) { }

  getEjecutivos() {

    this.ejecutivos = this.db.list<Ejecutivo>('CARTOLAS/TB_SCC_EJE', ref => ref.limitToFirst(10));

    return  this.ejecutivos.snapshotChanges()
    .pipe(
        map(actions => actions.map(data => {
        return { key: data.key, ...data.payload.val() };
      })),
      catchError(this.errorHandler.haldler)
    );
  }

  createEjecutivo(ejecutivo: Ejecutivo ) {
    this.ejecutivos.push(ejecutivo);
  }

  updateEjecutivo(ejecutivo: Ejecutivo, id: string) {
    this.ejecutivos.update(id, ejecutivo);
  }

  deleteEjecutivo( id: string ) {
    this.ejecutivos.remove(id);
  }
}
