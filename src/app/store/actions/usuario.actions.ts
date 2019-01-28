import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIO = '[Usuario] Cargar usuarios';
export const CARGAR_USUARIO_FAIL = '[Usuario] Carga FALLIDA de usuarios';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Carga CORRECTA de usuarios';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor( public id: string) { }
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor ( public payload: any ) { }
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor ( public usuario: Usuario ) { }
}

export type UsuarioActions = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;
