import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiConfig } from './api-config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
	constructor(
		private http: HttpClient,
		private apiconfig: ApiConfig,
	) { }

	login(value): Observable<any> {
		console.log(this.apiconfig.getApiUrl())
		let response = false;
		if (value.user === 'user' && value.password === '1234') {
			response = true
		}
		return 
		// return of this.http.get<Hero>(url).pipe(
	 //      tap(_ => this.log(`fetched hero id=${id}`)),
	 //      catchError(this.handleError<Hero>(`getHero id=${id}`))
	 //    );
	}
}
