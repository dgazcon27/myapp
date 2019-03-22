import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiConfig {
	private apiUrl: string = 'http://localhost';

	public getApiUrl() {
		return this.apiUrl;
	}
}