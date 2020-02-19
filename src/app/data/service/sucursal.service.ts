import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList,  } from '@angular/fire/database';
import 'firebase/database';

import { HttpHandlerErrorService } from '@app/core/service/error/http-handler-error.service';
import { Sucursal } from '@model/sucursal.model';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  sucursal: Sucursal;
  sucursales: AngularFireList<Sucursal>;

  constructor(private db: AngularFireDatabase,
              private errorHandler: HttpHandlerErrorService) { }

  getSucursales() {

    this.sucursales = this.db.list<Sucursal>('CARTOLAS/TB_SCC_SUC', ref => ref.limitToFirst(10));

    return  this.sucursales.snapshotChanges()
    .pipe(
        map(actions => actions.map(data => {
        return { key: data.key, ...data.payload.val() };
      })),
      catchError(this.errorHandler.haldler)
    );
  }

  createSucursal(ejecutivo: Sucursal ) {
    this.sucursales.push(ejecutivo);
  }

  updateSucursal(ejecutivo: Sucursal, id: string) {
    this.sucursales.update(id, ejecutivo);
  }

  deleteSucursal( id: string ) {
    this.sucursales.remove(id);
  }

}
