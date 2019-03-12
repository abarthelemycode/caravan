import { Component } from '@angular/core';
import { LoginService } from './_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers : [LoginService]
})

export class AppComponent {
  public localStorage = localStorage;
  constructor(private loginService: LoginService) {
  }

  logout(){
    this.loginService.logout();
  }

}
