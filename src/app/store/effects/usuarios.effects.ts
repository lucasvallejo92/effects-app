import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UsuariosActions from '../actions';
import { mergeMap, map } from 'rxjs/operators';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuariosService
    ) { }

    @Effect()
    CargarUsuarios$ = this.actions$.pipe(
        ofType(UsuariosActions.CARGAR_USUARIOS),
        mergeMap( () => this.usuariosService.getUsers().pipe(
            map( users => new UsuariosActions.CargarUsuariosSuccess(users) )
        ))
    );

}

