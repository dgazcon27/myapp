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

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	}
	

	login(value: any): Observable<any> {

		return this.http.post<any>(
			this.apiconfig.getApiUrl(),
			value,
			this.httpOptions
		)
		.pipe(
			tap(res => this.apiconfig.log(res)),
			catchError(this.apiconfig.handleError(`login ${value}`))
		);
	}
}