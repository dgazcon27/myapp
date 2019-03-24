import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../api/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	constructor(
		public formBuilder: FormBuilder,
		private loginService: LoginService,
		private router: Router
	) {

	}

	formLogin: FormGroup;

	ngOnInit() {
		this.formLogin = new FormGroup({
			email: new FormControl(),
			password: new FormControl()
		});
	}

	go(route) {
		this.router.navigate([`/${route}`])
	}

	login(value) {
		this.loginService.login(value)
		.subscribe(res => {
			if (res.status === 'success') {
				localStorage.clear();
				console.log(res.api_token)
				localStorage.setItem('token', `Bearer ${res.api_token}`)
				this.go('home')
			}
		})	
	}

}
