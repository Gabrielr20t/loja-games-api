import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(private _loginService: LoginService, private _router: Router) { }

  fazerLogin(): void {
    if (this._loginService.login(this.usuario, this.senha)) {
      this._router.navigate(['/restrito/lista']);
    } else {
      this.mensagem = 'Usuário ou senha inválidos.';
    }
  }
}
