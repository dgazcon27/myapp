import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
	items: Array<any> = [
		{
			'id': "1",
			'title': "Example 1",
			'description': 'description 1'
		},
		{
			'id': "2",
			'title': "Example 2",
			'description': 'description 2'
		},
		{
			'id': "3",
			'title': "Example 3",
			'description': 'description 3'
		},
		{
			'id': "4",
			'title': "Example 4",
			'description': 'description 4'
		},
		{
			'id': "5",
			'title': "Need a more complex app?",
			'description': 'Check the Ionic 4 Full Starter App.'
		}
	];
 	constructor(private http: HttpClient,) { }

 	getItem(): Observable<any[]>{
 		return of(this.items)
 	}

 	getItemByID(id: string): Observable<any> {
 		let response = this.items.filter(item => item.id === id);
 		return of(response[0])
 	}

 	updateItem(home): void {
 		let index = this.items.findIndex(item => item.id == home.id)
 		this.items[index] = home;
 	}

}
