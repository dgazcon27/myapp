import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../api/home.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	public items: Array<any>
	constructor(
		private router: Router,
		private homeService: HomeService,
		private alertController: AlertController
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

 	async logout() {
		const alert = await this.alertController.create({
			header: 'Mr Help',
			message: '¿Desea cerrar sesion?',
				buttons: [{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
						handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				},{
					text: 'Okay',
					handler: () => {
						localStorage.clear();
						this.router.navigate(['/login']);
					}
				}
			]
		});

		await alert.present();
	}
}
