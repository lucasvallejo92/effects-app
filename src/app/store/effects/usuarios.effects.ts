import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UsuariosActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { of } from 'rxjs'; // Funcion que convierte algo en un observable


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
            map( users => new UsuariosActions.CargarUsuariosSuccess(users) ),
            catchError( error => of(new UsuariosActions.CargarUsuariosFail(error) ))
        ))
    );

}

