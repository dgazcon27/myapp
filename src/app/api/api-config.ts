import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiConfig {
	private apiUrl: string = 'http://jointlic.tk/mrhelp/public/api/login';
	private httpOptions: {};

	public getApiUrl() {
		return this.apiUrl;
	}

	public getHeader(): any {
		return this.httpOptions;
	}

	public setHeader(head): any {
		let header = new HttpHeaders;
		head.map(item => {
			// this.httpOptions.header.set(item.name, item.value)
			header.set(item.name, item.value)
		})
		this.httpOptions = {
			header: header
		}

		return this.httpOptions;
	}

	public log(log) {
		console.log(log)
	} 

	public handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
	  
}

