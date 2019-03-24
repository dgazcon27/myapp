import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../api/home.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	public items: Array<any>
	constructor(
		private router: Router,
		private homeService: HomeService
	) {}

	ngOnInit(){
		this.getItems()
	}

	getItems(): void {
		this.homeService.getItem()
		.subscribe(items => {
			this.items = items.data
			console.log(items)
		})
	}
}
