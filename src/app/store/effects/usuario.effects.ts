import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UsuarioActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { of } from 'rxjs'; // Funcion que convierte algo en un observable


@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuariosService
    ) { }

    @Effect()
    CargarUsuario$ = this.actions$.pipe(
        ofType(UsuarioActions.CARGAR_USUARIO),
        mergeMap( (action: UsuarioActions.CargarUsuario) => this.usuariosService.getUserById(action.id).pipe(
            map( user => new UsuarioActions.CargarUsuarioSuccess(user) ),
            catchError( error => of(new UsuarioActions.CargarUsuarioFail(error) ))
        ))
    );

}

