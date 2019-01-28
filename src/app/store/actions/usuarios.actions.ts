import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Carga FALLIDA de usuarios';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Carga CORRECTA de usuarios';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor ( public payload: any ) { }
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor ( public usuarios: Usuario[] ) { }
}

export type UsuariosActions = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
