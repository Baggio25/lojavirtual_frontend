import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './model/usuario';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
      private fb: FormBuilder,
      private loginService : LoginService
  ) {}

  /** Pegar dados do formulário */
  loginForm = this.fb.group({
    id: [],
    login: [null, Validators.required],
    senha: [null, Validators.required]
  });

  /**Transforma em objeto */
  loginObjeto(): Usuario { 
    return {
      login : this.loginForm.get('login')?.value!,
      senha : this.loginForm.get('senha')?.value!
    }
  }

  fazerLogin() {
    const usuario = this.loginObjeto();
    this.loginService.logar(usuario);
  }

  recuperarSenha(){
    const usuario = this.loginObjeto();
    var login = usuario.login;

    console.log('---- > Login: ' + login);

    if(login == null || login == ' ') {
      alert('Informe o E-mail para recuperar a senha!')
    }else {
      this.loginService.recuperarSenha(login);
    }
  }

}
