import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../api/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	constructor(
		public formBuilder: FormBuilder,
		private loginService: LoginService
	) {

	}

	formLogin: FormGroup;

	ngOnInit() {
		this.formLogin = new FormGroup({
			user: new FormControl(),
			password: new FormControl()
		});
	}

	login(value) {
		this.loginService.login(value)
		.subscribe()
	}

}
