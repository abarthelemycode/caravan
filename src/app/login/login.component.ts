import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    input :any = {};
    badCredential : boolean = false;
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        ) { }

    ngOnInit() {
        // reset login status
        this.loginService.logout();
    }

    login() {
        this.badCredential = false;
        this.loading = true;
        this.loginService.login(this.input.username, this.input.password)
            .subscribe(
                data => {
                    this.router.navigate(["/home"]);
                },
                error => {
                    this.badCredential = true;
                    this.loading = false;
                });
    }

}