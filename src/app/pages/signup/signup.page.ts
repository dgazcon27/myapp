import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	formSignup: FormGroup;
	constructor(
		public formBuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.formSignup = new FormGroup({
			name: new FormControl(),
			lastName: new FormControl(),
			email: new FormControl(),
			phoneNumber: new FormControl(),
			password: new FormControl(),
			address: new FormControl(),
		});
	}

	signup(form) {
		console.log(form)
	}

}
