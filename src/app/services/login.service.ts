import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environent';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ulrApi = environment.urlApi + '/login';

  constructor(private http: HttpClient) { 
  }

  logar( usuario: Usuario) {
    return this.http.post<string>(this.ulrApi, usuario).subscribe({
      next: (res) => {
        console.log("----------- JWT -----------");
        console.log(res);
      },

      error: (error) => {
        alert("Deu erro!" + error.error.text);
        console.error(error);
      }
    });
  }

}
