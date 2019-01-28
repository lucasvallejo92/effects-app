import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';
  private perPage = '6';

  constructor( private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${ this.url }/users?per_page=${ this.perPage }`).pipe(
      map( resp => {
        return resp['data'];
      })
    );
  }
}
