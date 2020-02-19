import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList,  } from '@angular/fire/database';
import 'firebase/database';

import { HttpHandlerErrorService } from '@app/core/service/error/http-handler-error.service';
import { Cargo } from '@model/cargo.model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  cargo: Cargo;
  cargos: AngularFireList<Cargo>;

  constructor(private db: AngularFireDatabase,
              private errorHandler: HttpHandlerErrorService) { }

  getCargos() {

    this.cargos = this.db.list<Cargo>('CARTOLAS/TA_SCC_TPO_CGO', ref => ref.limitToFirst(10));

    return  this.cargos.snapshotChanges()
    .pipe(
        map(actions => actions.map(data => {
        return { key: data.key, ...data.payload.val() };
      })),
      catchError(this.errorHandler.haldler)
    );
  }

  createCargo(cargo: Cargo ) {
    this.cargos.push(cargo);
  }

  updateCargo(cargo: Cargo, id: string) {
    this.cargos.update(id, cargo);
  }

  deleteCargo( id: string ) {
    this.cargos.remove(id);
  }
}
