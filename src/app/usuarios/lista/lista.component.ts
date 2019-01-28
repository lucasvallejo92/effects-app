import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  loaded: boolean;
  error: any;

  // FORMA NORMAL
  // constructor( public usuarioService: UsuarioService ) { }

  // FORMA NgRx
  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    // FORMA NORMAL
    // this.usuarioService.getUsers().subscribe( users => {
    //   console.log(users);
    //   this.usuarios = users;
    // });

    // CON NgRx
    this.store.select('usuarios').subscribe(
      usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.loaded = usuarios.loaded;
        this.error = usuarios.error;
      }
    );
    // new actions.CargarUsuarios()
    this.store.dispatch( new usuariosActions.CargarUsuarios);
  }

}
