import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environent';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ulrApi = environment.urlApi;

  constructor(private http: HttpClient) { 
  }

  logar( usuario: Usuario) {
    return this.http.post<string>(this.ulrApi  + '/login', usuario).subscribe({
      next: (res) => {
        var respJson = JSON.stringify(res);
        var jwt = JSON.parse(respJson);

        localStorage.setItem("AuthorizationLojaVirtual", jwt.Authorization);
      },

      error: (error) => {
        alert("Deu erro!" + error.error.text);
        console.error(error);
      }
    });
  }

  recuperarSenha(login : String) {
    return this.http.post<string>(environment.urlApi + '/recuperarSenha', login).subscribe({
      next: (res) => {
        var respJson = JSON.stringify(res);
        var resposta = JSON.parse(respJson);

        alert(resposta.msg);
      },

      error: (error) => {
        console.log(error);
        alert("Erro ao recuperar senha: " + JSON.stringify(error));
      }
    });
  }

}
