import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
     
    loginForm: FormGroup;
    authService: AuthService;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit()
    {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {

        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
    
        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => console.log('autenticado'),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                }
            );
    }
}