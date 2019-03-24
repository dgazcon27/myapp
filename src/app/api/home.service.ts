import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiConfig } from './api-config'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
	items: Array<any> = [];

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem('token')
		})
	}

 	constructor(
 		private http: HttpClient,
 		private apiconfig: ApiConfig
	) { }

 	getItem(): Observable<any>{
 		this.apiconfig.setApiUrl('services')
 		return this.http.post<any>(
 			this.apiconfig.getApiUrl(),
 			{},
 			this.httpOptions
		)
		.pipe(
			tap(res => res),
			catchError(this.apiconfig.handleError(`GETTING ITEMS`))
		)
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
